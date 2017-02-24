import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const DesignerType = new GraphQLObjectType({
  name: 'Designer',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Unique Key for Coin Type',
      resolve: obj => obj.id,
    },
    name: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.name,
    },
    description: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.description,
    },
    denominationId: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.denominationId,
    },
    startYear: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.startYear,
    },
    endYear: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.endYear,
    },
  }),
});
