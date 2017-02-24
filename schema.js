// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

// TYPES
import {
  CoinType,
  MintType,
} from "./types";

// Queries
import {
  Mint,
  Coin,
} from "./queries.js";

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    coin: {
      type: CoinType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Coin.findById(args.id).then( res => res.dataValues),
    },
    mint: {
      type: MintType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Mint.findById(args.id).then( res => res.dataValues),
    },
    mints: {
      type: new GraphQLList(MintType),
      resolve: (root, args) => Mint.findAll({
        attributes: ['mark', 'name', 'id']
      })
    }
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
