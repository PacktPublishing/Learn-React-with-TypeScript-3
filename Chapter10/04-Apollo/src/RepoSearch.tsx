import * as React from "react";
import gql from "graphql-tag";
import { ApolloClient } from "apollo-boost";
import { Mutation } from "react-apollo";

interface IProps {
  client: ApolloClient<any>;
}

interface ISearch {
  orgName: string;
  repoName: string;
}

interface IRepo {
  id: string;
  name: string;
  description: string;
  viewerHasStarred: boolean;
  stargazers: {
    totalCount: number;
  };
  issues: {
    edges: [
      {
        node: {
          id: string;
          title: string;
          url: string;
        };
      }
    ];
  };
}

const defaultRepo: IRepo = {
  id: "",
  name: "",
  description: "",
  viewerHasStarred: false,
  stargazers: {
    totalCount: 0
  },
  issues: {
    edges: [
      {
        node: {
          id: "",
          title: "",
          url: ""
        }
      }
    ]
  }
};

interface IQueryResult {
  repository: IRepo;
}

const GET_REPO = gql`
  query GetRepo($orgName: String!, $repoName: String!) {
    repository(owner: $orgName, name: $repoName) {
      id
      name
      description
      viewerHasStarred
      stargazers {
        totalCount
      }
      issues(last: 5) {
        edges {
          node {
            id
            title
            url
            publishedAt
          }
        }
      }
    }
  }
`;

const STAR_REPO = gql`
  mutation($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        stargazers {
          totalCount
        }
      }
    }
  }
`;

const RepoSearch: React.SFC<IProps> = props => {
  const [search, setSearch]: [
    ISearch,
    (search: ISearch) => void
  ] = React.useState({
    orgName: "",
    repoName: ""
  });

  const [repo, setRepo]: [IRepo, (repo: IRepo) => void] = React.useState(
    defaultRepo
  );

  const [searchError, setSearchError]: [
    string,
    (searchError: string) => void
  ] = React.useState("");

  const handleOrgNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, orgName: e.currentTarget.value });
  };

  const handleRepoNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, repoName: e.currentTarget.value });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchError("");

    props.client
      .query<IQueryResult>({
        query: GET_REPO,
        variables: { orgName: search.orgName, repoName: search.repoName }
      })
      .then(response => {
        setRepo(response.data.repository);
      })
      .catch(error => {
        setSearchError(error.message);
      });
  };

  return (
    <div className="repo-search">
      <form onSubmit={handleSearch}>
        <label>Organization</label>
        <input
          type="text"
          onChange={handleOrgNameChange}
          value={search.orgName}
        />
        <label>Repository</label>
        <input
          type="text"
          onChange={handleRepoNameChange}
          value={search.repoName}
        />
        <button type="submit">Search</button>
      </form>
      {repo.id && (
        <div className="repo-item">
          <h4>
            {repo.name}
            {repo.stargazers ? ` ${repo.stargazers.totalCount} stars` : ""}
          </h4>
          <p>{repo.description}</p>
          <div>
            {!repo.viewerHasStarred && (
              <Mutation
                mutation={STAR_REPO}
                variables={{ repoId: repo.id }}
                update={cache => {
                  const data: { repository: IRepo } | null = cache.readQuery({
                    query: GET_REPO,
                    variables: {
                      orgName: search.orgName,
                      repoName: search.repoName
                    }
                  });
                  if (data === null) {
                    return;
                  }
                  const newData = {
                    ...data.repository,
                    viewerHasStarred: true,
                    stargazers: {
                      ...data.repository.stargazers,
                      totalCount: data.repository.stargazers.totalCount + 1
                    }
                  };
                  cache.writeQuery({
                    query: GET_REPO,
                    variables: {
                      orgName: search.orgName,
                      repoName: search.repoName
                    },
                    data: { repository: newData }
                  });
                  setRepo(newData);
                }}
              >
                {(addStar, { loading, error }) => (
                  <div>
                    <button disabled={loading} onClick={() => addStar()}>
                      {loading ? "Adding ..." : "Star!"}
                    </button>
                    {error && <div>{error.toString()}</div>}
                  </div>
                )}
              </Mutation>
            )}
          </div>
          <div>
            Last 5 issues:
            {repo.issues && repo.issues.edges ? (
              <ul>
                {repo.issues.edges.map(item => (
                  <li key={item.node.id}>{item.node.title}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      )}
      {searchError && <div>{searchError}</div>}
    </div>
  );
};
export default RepoSearch;
