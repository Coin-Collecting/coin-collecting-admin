// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// EDGE TYPE
export const EdgeType = new GraphQLObjectType({
  name: 'Edge',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.id,
    },
    type: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.type,
    },
    note: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.note,
    },
  }),
});
