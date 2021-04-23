import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema } from "nexus";
import * as path from "path";
import { Regex, RegexQuery } from "./Regex";
import { ValidationResult } from "./ValidationResult";

export const schema = makeSchema({
  shouldExitAfterGenerateArtifacts:
    process.env.NEXUS_SHOULD_EXIT_AFTER_GENERATE_ARTIFACTS === "true",
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  contextType: {
    module: require.resolve(".prisma/client/index.d.ts"),
    export: "PrismaClient",
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve(".prisma/client/index.d.ts"),
        alias: "PrismaClient",
      },
    ],
  },
  outputs: {
    typegen: path.join(
      __dirname,
      "../../../node_modules/@types/typegen-nexus/index.d.ts"
    ),
    schema: path.join(__dirname, "./schema.graphql"),
  },
  types: [Regex, RegexQuery, ValidationResult],
});
