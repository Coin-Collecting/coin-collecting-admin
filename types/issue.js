import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { DenominationType } from "./index.js";
import { getDenominationByID } from "../api/index.js";

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
      resolve: obj => getDenominationByID(obj.denomination),
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
