import { mutationType, objectType, queryType } from "nexus";

export const Regex = objectType({
  name: "Regex",
  definition(t) {
    t.model.id();
    t.model.value();
    t.model.validationResults({});
    t.model.processed();
  },
});

export const RegexMutation = mutationType({
  definition(t) {
    t.crud.upsertOneRegex();
  },
});

export const RegexQuery = queryType({
  definition(t) {
    t.crud.regex();
  },
});
