// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

// TYPES
import {
  DesignerType,
  IssueType,
  ImageType,
  EdgeType,
  CompositionType,
} from "./index.js";

// DATABASE FUNCTIONS
import {
  getDesignerByID,
  getIssueByID,
  getImageByID,
  getCompositionByID
 } from '../database';

// SEQUELIZE
const Sequelize = require('sequelize');

const connection = new Sequelize("coins_db", "root", "", {
  'host': '127.0.0.1',
  'port': '3301',
});

const Edge = connection.define("edge", {
  type: Sequelize.STRING,
  note: Sequelize.STRING,
});

export const VarietyType = new GraphQLObjectType({
  name: 'Variety',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Unique Key for Coin Type',
      resolve: obj => obj.id,
    },
    designer: {
      type: DesignerType,
      description: '...',
      resolve: obj => getDesignerByID(obj.designer),
    },
    issue: {
      type: IssueType,
      description: '...',
      resolve: obj => getIssueByID(obj.issue),
    },
    images: {
      type: ImageType,
      description: '...',
      resolve: obj => getImageByID(obj.images),
    },
    edge: {
      type: EdgeType,
      description: 'Describes the sides of the coins surface',
      resolve: obj => Edge.findById(obj.edge).then( res => res.dataValues),
    },
    composition: {
      type: CompositionType,
      description: 'What metals the coin is made up of',
      resolve: obj => getCompositionByID(obj.composition),
    },
    name: {
      type: GraphQLString,
      description: 'Name of variety',
      resolve: obj => obj.name,
    },
    description: {
      type: GraphQLString,
      description: 'Description of the coin, or history',
      resolve: obj => obj.description,
    },
    mass: {
      type: GraphQLFloat,
      description: 'Mass of the variety',
      resolve: obj => obj.mass,
    },
    diameter: {
      type: GraphQLFloat,
      description: 'Diameter of the variety',
      resolve: obj => obj.diameter,
    },
  }),
});
