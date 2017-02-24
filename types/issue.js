import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { DenominationType } from "./index.js";

// SEQUELIZE
const Sequelize = require('sequelize');

const connection = new Sequelize("coins_db", "root", "", {
  'host': '127.0.0.1',
  'port': '3301',
});

const Denomination = connection.define("denomination", {
  kind: Sequelize.STRING,
  val: Sequelize.FLOAT,
});

export const IssueType = new GraphQLObjectType({
  name: 'Issue',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Unique Key for Coin Type',
      resolve: obj => obj.id,
    },
    name: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.name,
    },
    description: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.description,
    },
    denomination: {
      type: DenominationType,
      description: '...',
      resolve: obj => Denomination.findById(obj.denomination).then( res => res.dataValues),
    },
    startYear: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.startYear,
    },
    endYear: {
      type: GraphQLString,
      description: '...',
      resolve: obj => obj.endYear,
    },
  }),
});
