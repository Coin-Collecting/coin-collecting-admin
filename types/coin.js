// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

// TYPES
import {
  VarietyType,
  MintType,
 } from './index.js';

// SEQUELIZE
const Sequelize = require('sequelize');
const connection = new Sequelize("coins_db", "root", "", {
  'host': '127.0.0.1',
  'port': '3301',
});

const Mint = connection.define("mint", {
  name: Sequelize.STRING,
  mark: Sequelize.STRING,
});

// DATABASE FUNCTIONS
import {
  getVarietyByID,
} from '../database';

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
      resolve: obj => getVarietyByID(obj.variety),
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
    }
  }),
});
