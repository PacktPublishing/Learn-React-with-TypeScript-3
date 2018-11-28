import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

interface IViewer {
  name: string;
  avatarUrl: string;
}
interface IQueryResult {
  viewer: IViewer;
}

const GET_VIEWER = gql`
  {
    viewer {
      name
      avatarUrl
    }
  }
`;

class GetViewerQuery extends Query<IQueryResult> {}

export const Header: React.SFC = () => {
  return (
    <GetViewerQuery query={GET_VIEWER}>
      {({ data, loading, error }) => {
        if (error) {
          return <div className="viewer">{error.toString()}</div>;
        }
        if (loading) {
          return <div className="viewer">Loading ...</div>;
        }

        if (!data || !data.viewer) {
          return null;
        }
        return (
          <div>
            <img src={data.viewer.avatarUrl} className="avatar" />
            <div className="viewer">{data.viewer.name}</div>
            <h1>GitHub Search</h1>
          </div>
        );
      }}
    </GetViewerQuery>
  );
};
