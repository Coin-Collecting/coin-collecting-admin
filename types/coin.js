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

// DATABASE FUNCTIONS
import {
  getVarietyByID,
  getMintByID,
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
      resolve: obj => getMintByID(obj.mint),
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
