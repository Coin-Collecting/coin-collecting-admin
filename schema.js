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

// SEQUELIZE
const Sequelize = require('sequelize');

const connection = new Sequelize("coins_db", "root", "", {
  'host': '127.0.0.1',
  'port': '3301',
});

const Coin = connection.define("coin", {
  variety: Sequelize.STRING,
  year: Sequelize.STRING,
  mint: Sequelize.STRING,
  mintage: Sequelize.STRING,
  keyDate: Sequelize.BOOLEAN,
  description: Sequelize.STRING,
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    coin: {
      type: CoinType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve: (root, args) => Coin.findById(args.id).then( res => res.dataValues),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
