// DEPENDENCIES
import {
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';
const { UserError } = require('graphql-errors');
import { CoinType } from '../types';
import { Coin } from '../sequelize';

export const createCoin = {
  type: CoinType,
  description: 'Create a new coin',
  args: {
    variety: { type: new GraphQLNonNull(GraphQLString) },
    mint: { type: new GraphQLNonNull(GraphQLString) },
    mintage: { type: new GraphQLNonNull(GraphQLFloat) },
    keyDate: { type: new GraphQLNonNull(GraphQLBoolean) },
    year: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
  },
  resolve: (value, args) => Coin.create({
    variety: args.variety,
    mint: args.mint,
    mintage: args.mintage,
    keyDate: args.keyDate,
    year: args.year,
    description: args.description,
  }),
};

export const deleteCoin = {
  type: CoinType,
    description: 'Delete a coin with id',
    args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: (value, { id }) => Coin.destroy({where: { id: id }}),
};