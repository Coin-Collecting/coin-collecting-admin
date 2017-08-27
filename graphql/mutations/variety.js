// DEPENDENCIES
import { GraphQLString, GraphQLNonNull } from 'graphql';
const { UserError } = require('graphql-errors')
import { VarietyType } from '../types';
import { Variety } from '../sequelize';

export const createVariety = {
  type: VarietyType,
  description: 'Create a variety',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    mass: { type: new GraphQLNonNull(GraphQLString) },
    diameter: { type: new GraphQLNonNull(GraphQLString) },
    issue: { type: new GraphQLNonNull(GraphQLString) },
    edge: { type: new GraphQLNonNull(GraphQLString) },
    composition: { type: new GraphQLNonNull(GraphQLString) },
    designer: { type: new GraphQLNonNull(GraphQLString) },
    images: { type: GraphQLString },
  },
  resolve: (value, args) => {
    const {
      name,
      description,
      mass,
      diameter,
      issue,
      edge,
      composition,
      designer,
      images,
    } = args;

    if (!name) throw new UserError('Must provide a Name');
    if (!mass) throw new UserError('Must provide Mass');
    if (!diameter) throw new UserError('Must provide Diameter');
    if (!issue) throw new UserError('Must provide Issue');
    if (!edge) throw new UserError('Must provide Edge');
    if (!composition) throw new UserError('Must provide Composition');
    if (!designer) throw new UserError('Must provide Designer');

    return Variety.create({
      name,
      description,
      mass,
      diameter,
      issue,
      edge,
      composition,
      designer,
      images,
    });
  }
};

export const updateVariety = {
  type: VarietyType,
  description: 'Update a variety by ID',
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    mass: { type: new GraphQLNonNull(GraphQLString) },
    diameter: { type: new GraphQLNonNull(GraphQLString) },
    issue: { type: new GraphQLNonNull(GraphQLString) },
    edge: { type: new GraphQLNonNull(GraphQLString) },
    composition: { type: new GraphQLNonNull(GraphQLString) },
    designer: { type: new GraphQLNonNull(GraphQLString) },
    images: { type: GraphQLString },
  },
  resolve: (value, args) => {
    const {
      id,
      name,
      description,
      mass,
      diameter,
      issue,
      edge,
      composition,
      designer,
      images,
    } = args;

    if (!id) throw new UserError('Must provide ID');

    return Variety.update({
      name,
      description,
      mass,
      diameter,
      issue,
      edge,
      composition,
      designer,
      images,
    }, {
      where: { id: args.id },
      returning: true,
      plain: true,
    });
  }
};