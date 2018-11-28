import React from "react";
import axios from "axios";

interface IViewer {
  name: string;
  avatarUrl: string;
}
interface IQueryResult {
  data: {
    viewer: IViewer;
  };
}

export const Header: React.SFC = () => {
  const [viewer, setViewer]: [
    IViewer,
    (viewer: IViewer) => void
  ] = React.useState({ name: "", avatarUrl: "" });

  React.useEffect(() => {
    axios
      .post<IQueryResult>(
        "https://api.github.com/graphql",
        {
          query: `query {
                viewer {
                  name
                  avatarUrl
                }
              }`
        },
        {
          headers: {
            Authorization: "bearer our-bearer-token"
          }
        }
      )
      .then(response => {
        setViewer(response.data.data.viewer);
      });
  }, []);

  return (
    <div>
      <img src={viewer.avatarUrl} className="avatar" />
      <div className="viewer">{viewer.name}</div>
      <h1>GitHub Search</h1>
    </div>
  );
};
