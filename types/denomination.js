import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const DenominationType = new GraphQLObjectType({
  name: 'Denomination',
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
    value: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.value,
    },
  }),
});
