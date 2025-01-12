const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

// Tipo raíz para consultas (query)
const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => '¡Hola Mundo!',
        },
    },
});

// Exporta el esquema
const schema = new GraphQLSchema({
    query: QueryType,
});

module.exports = schema;
