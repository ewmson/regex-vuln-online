import { ApolloServer, gql } from "apollo-server";
import { context } from "./PrismaContext";
import { schema } from "./schema";
import { GraphQLRequestContext } from "apollo-server-types";

const myPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  requestDidStart(requestContext: GraphQLRequestContext) {
    console.log("Request started! Query:\n" + requestContext.request.query);

    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      parsingDidStart(requestContext: GraphQLRequestContext) {
        console.log("Parsing started!");
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      validationDidStart(requestContext: GraphQLRequestContext) {
        console.log("Validation started!");
      },
    };
  },
};
const server = new ApolloServer({
  schema: schema,
  context: context,
  plugins: [myPlugin],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
