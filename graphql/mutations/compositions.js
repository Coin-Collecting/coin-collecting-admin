// DEPENDENCIES
import { GraphQLFloat } from 'graphql';
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