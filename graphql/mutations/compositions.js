// DEPENDENCIES
import { GraphQLFloat, GraphQLString } from 'graphql';
const { UserError } = require('graphql-errors')
import { CompositionType } from '../types';
import { Composition } from '../sequelize';

function totalEqualOne(args) {
  let { gold, silver, copper, nickel, brass, zinc, steel, tin } = args;
  return parseFloat(gold || 0) +
    parseFloat(silver || 0) +
    parseFloat(copper || 0) +
    parseFloat(nickel || 0) +
    parseFloat(brass || 0) +
    parseFloat(zinc || 0) +
    parseFloat(steel || 0) +
    parseFloat(tin || 0) === 1;
}

export const createComposition = {
  type: CompositionType,
    description: 'Create a new composition',
    args: {
    gold: { type: GraphQLFloat },
    silver: { type: GraphQLFloat },
    copper: { type: GraphQLFloat },
    nickel: { type: GraphQLFloat },
    brass: { type: GraphQLFloat },
    zinc: { type: GraphQLFloat },
    steel: { type: GraphQLFloat },
    tin: { type: GraphQLFloat },
  },
  resolve: (value, args) => {
    if (!totalEqualOne(args)) {
      throw new UserError('The total composition must equal 1.00');
    }

    Composition.create({
      gold: args.gold,
      silver: args.silver,
      copper: args.copper,
      nickel: args.nickel,
      brass: args.brass,
      zinc: args.zinc,
      steel: args.steel,
      tin: args.tin,
    });
  }
};

export const updateComposition = {
  type: CompositionType,
  description: 'Updates a composition',
  args: {
    id: { type: GraphQLString },
    gold: { type: GraphQLFloat },
    silver: { type: GraphQLFloat },
    copper: { type: GraphQLFloat },
    nickel: { type: GraphQLFloat },
    brass: { type: GraphQLFloat },
    zinc: { type: GraphQLFloat },
    steel: { type: GraphQLFloat },
    tin: { type: GraphQLFloat },
  },
  resolve: (value, args) => {
    if (!args.id) {
      throw new UserError('Must Provide an ID');
    }
    if (!totalEqualOne(args)) {
      throw new UserError('The total composition must equal 1.00');
    }

    Composition.update({
      gold: args.gold || 0,
      silver: args.silver || 0,
      copper: args.copper || 0,
      nickel: args.nickel || 0,
      brass: args.brass || 0,
      zinc: args.zinc || 0,
      steel: args.steel || 0,
      tin: args.tin || 0,
    }, {
      where: { id: args.id },
      returning: true,
      plain: true,
    });
  }
};