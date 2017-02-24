import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';

export const CompositionType = new GraphQLObjectType({
  name: 'Composition',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.id,
    },
    gold: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.gold,
    },
    silver: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.silver,
    },
    copper: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.copper,
    },
    nickel: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.nickel,
    },
    brass: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.brass,
    },
    zinc: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.zinc,
    },
    steel: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.steel,
    },
    tin: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.tin,
    },
  }),
});
