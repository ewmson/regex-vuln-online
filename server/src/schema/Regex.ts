import { objectType } from 'nexus'

export const Regex = objectType({
    name: 'Regex',
    definition(t) {
        t.model.id()
        t.model.value()
        t.model.validationResults({})
    },
});