// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

// TYPES
import { CoinType } from "./types";

// API FUNCTIONS
import { getCoinByID } from './api';


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    coin: {
      type: CoinType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve: (root, args) => getCoinByID(args.id),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
