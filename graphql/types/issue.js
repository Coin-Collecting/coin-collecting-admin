// DEPENDCENCIES
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// TYPES
import { DenominationType } from "./index.js";

// QUERIES
import { Denomination } from "../sequelize.js";

// ISSUE TYPE
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
