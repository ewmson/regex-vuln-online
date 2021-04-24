import { gql, useQuery } from "@apollo/client";
import { NexusGenFieldTypes } from "typegen-nexus";
import React from "react";
import { useParams } from "react-router-dom";

const GET_REGEX = gql`
  query GetRegex($value: String!) {
    regex(where: { value: $value }) {
      id
      value
      validationResults {
        id
      }
    }
  }
`;

export function RegexStatusPage() {
  let { regexValue } = useParams<{ regexValue: string }>();
  console.log(regexValue);
  const { loading, error, data } = useQuery<NexusGenFieldTypes["Regex"]>(
    GET_REGEX,
    {
      pollInterval: 5000,
      variables: { value: regexValue },
    }
  );
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
