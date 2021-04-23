import { objectType, queryType } from "nexus";

export const Regex = objectType({
  name: "Regex",
  definition(t) {
    t.model.id();
    t.model.value();
    t.model.validationResults({});
  },
});

export const RegexQuery = queryType({
  definition(t) {
    t.crud.regex();
  },
});
