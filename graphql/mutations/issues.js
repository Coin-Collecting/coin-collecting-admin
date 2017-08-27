// DEPENDENCIES
import { GraphQLString, GraphQLNonNull } from 'graphql';
const { UserError } = require('graphql-errors')
import { IssueType } from '../types';
import { Issue } from '../sequelize';

export const createIssue = {
  type: IssueType,
    description: 'Create a issue',
    args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    denomination: { type: new GraphQLNonNull(GraphQLString) },
    startYear: { type: new GraphQLNonNull(GraphQLString) },
    endYear: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (value, args) => {
    const {
      name,
      description,
      denomination,
      startYear,
      endYear,
    } = args;

    if (!name) throw new UserError('Must provide Name');
    if (!denomination) throw new UserError('Must provide Denomination');
    if (!startYear) throw new UserError('Must provide Start Year');
    if (!endYear) throw new UserError('Must provide End Year');

    return Issue.create({
      name,
      description,
      denomination,
      startYear,
      endYear,
    });
  }
};

export const updateIssue = {
  type: IssueType,
  description: 'Update an issue by ID',
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    denomination: { type: new GraphQLNonNull(GraphQLString) },
    startYear: { type: new GraphQLNonNull(GraphQLString) },
    endYear: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (value, args) => {
    const {
      id,
      name,
      description,
      denomination,
      startYear,
      endYear,
    } = args;

    if (!id) throw new UserError('Must provide ID');

    return Issue.update({
      name,
      description,
      denomination,
      startYear,
      endYear,
    }, {
      where: { id: args.id },
      returning: true,
      plain: true,
    });
  }
};