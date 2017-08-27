// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
  coin,
  coins,
  composition,
  compositions,
  denomination,
  denominations,
  designer,
  designers,
  edge,
  edges,
  issues,
  issue,
  image,
  images,
  mint,
  mints,
  variety,
  varieties,
} from './queries';

import {
  createComposition,
  updateComposition,
  createIssue,
  updateIssue,
  createVariety,
  updateVariety,
  createCoin,
  deleteCoin,
} from './mutations';

// QUERIES
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    coin,
    coins,
    composition,
    compositions,
    denomination,
    denominations,
    designer,
    designers,
    edge,
    edges,
    issues,
    issue,
    image,
    images,
    mint,
    mints,
    variety,
    varieties,
  }),
});

// MUTATIONS
const MutationType = new GraphQLObjectType({
  name: 'Mutations',
  description: 'These are the things we can change',
  fields: () => ({
    deleteCoin,
    createCoin,
    createVariety,
    updateVariety,
    updateComposition,
    createComposition,
    createIssue,
    updateIssue,
  }),
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
