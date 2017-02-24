import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const MintType = new GraphQLObjectType({
  name: 'Mint',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Unique Key for Coin Image',
      resolve: obj => obj.id,
    },
    mark: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.mark,
    },
    name: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.name,
    },
  }),
});
