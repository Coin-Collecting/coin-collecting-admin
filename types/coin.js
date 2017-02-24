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

const Variety = connection.define("variety", {
  issue: Sequelize.STRING,
  designer: Sequelize.STRING,
  images: Sequelize.STRING,
  edge: Sequelize.STRING,
  composition: Sequelize.STRING,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  mass: Sequelize.FLOAT,
  diameter: Sequelize.FLOAT,
});

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
      type: GraphQLBoolean,
      description: '...',
      resolve: obj => obj.description,
    }
  }),
});
