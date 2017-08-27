// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql';

// TYPES
import { VarietyType, MintType } from './index.js';

// QUERIES
import { Mint, Variety } from "../sequelize.js";

// COIN TYPE
export const CoinType = new GraphQLObjectType({
  name: 'Coin',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Unique Key for Coin Type',
      resolve: obj => obj.id,
    },
    variety: {
      type: VarietyType,
      description: '...',
      resolve: obj => Variety.findById(obj.variety).then( article => article.dataValues)
    },
    mint: {
      type: MintType,
      description: '...',
      resolve: obj => Mint.findById(obj.mint).then( article => article.dataValues)
    },
    mintage: {
      type: GraphQLFloat,
      description: '...',
      resolve: obj => obj.mintage,
    },
    year: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.year,
    },
    keyDate: {
      type: GraphQLBoolean,
      description: '...',
      resolve: obj => obj.keyDate,
    },
    description: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.description,
    }
  }),
});
