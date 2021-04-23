import React from "react";
import "./App.css";

import { gql, useQuery } from "@apollo/client";

const GET_REGEX = gql`
  query GetRegex {
    regex(where: { value: "a" }) {
      id
      value
      validationResults {
        id
      }
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_REGEX, { pollInterval: 5000 });
  if (loading) return <div>'Loading...'</div>;
  if (error) {
    return (
      <div>
        Error!
        {error.message}
        {error.extraInfo}
      </div>
    );
  }
  return (
    <div>
      We got data: <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
