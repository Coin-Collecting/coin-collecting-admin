// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// IMAGE TYPE
export const ImageType = new GraphQLObjectType({
  name: 'Image',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Unique Key for Coin Image',
      resolve: obj => obj.id,
    },
    obverse: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.obverse,
    },
    reverse: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.reverse,
    },
  }),
});
