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