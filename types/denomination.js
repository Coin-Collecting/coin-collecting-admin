// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


// DENOMINATION TYPE
export const DenominationType = new GraphQLObjectType({
  name: 'Denomination',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.id,
    },
    kind: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.kind,
    },
    val: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.val,
    },
  }),
});
