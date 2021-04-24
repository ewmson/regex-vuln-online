import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { NexusGenFieldTypes } from "typegen-nexus";

const UPSERT_REGEX = gql`
  mutation UpsertRegex($value: String!) {
    upsertOneRegex(
      create: { value: $value }
      update: {}
      where: { value: $value }
    ) {
      id
      value
    }
  }
`;

export function Home() {
  const [regexValue, setRegexValue] = useState("");
  const [upsertRegex, { data }] = useMutation<{
    upsertOneRegex: NexusGenFieldTypes["Regex"];
  }>(UPSERT_REGEX);
  const history = useHistory();
  const handleChange = (event: { target: { value: string } }) => {
    setRegexValue(event.target.value);
  };

  return (
    <>
      <div>
        <b>Welcome to a silly little regex vulnerability tool.</b>
      </div>
      <div>
        Simply input your regex and we will tell you if it is detected to be
        vulnerable (results not guaranteed ;) ).
      </div>

      <label>
        Your Regex{" "}
        <input type="text" value={regexValue} onChange={handleChange} />
      </label>
      <button
        onClick={() =>
          upsertRegex({ variables: { value: regexValue } }).then((data) => {
            console.log(data);
            return history.push("/regex/" + data.data?.upsertOneRegex.value);
          })
        }
      >
        Lets check this regex :)
      </button>
    </>
  );
}
