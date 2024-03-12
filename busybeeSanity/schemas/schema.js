import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import gestiune from './gestiune';
import coletare from "./coletare"
import soferi from "./soferi"
import strans from "./strans"
import tiparire from "./tiparire"


export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        gestiune,
        coletare,
        soferi,
        strans,
        tiparire
    ])
})