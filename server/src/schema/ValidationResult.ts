import {objectType} from "nexus";

export const ValidationResult = objectType({
    name: 'ValidationResult',
    definition(t) {
        t.model.id()
        t.model.validator()
        t.model.regex()
    },
})