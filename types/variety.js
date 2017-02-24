// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';

// TYPES
import {
  DesignerType,
  IssueType,
  ImageType,
  EdgeType,
  CompositionType,
} from "./index.js";

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

const Designer = connection.define('designer', {
  name: Sequelize.STRING,
});

const Issue = connection.define('issue', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  denomination: Sequelize.STRING,
  startYear: Sequelize.STRING,
  endYear: Sequelize.STRING,
});

const Composition = connection.define("composition", {
  gold: Sequelize.FLOAT,
  silver: Sequelize.FLOAT,
  copper: Sequelize.FLOAT,
  nickel: Sequelize.FLOAT,
  brass: Sequelize.FLOAT,
  zinc: Sequelize.FLOAT,
  steel: Sequelize.FLOAT,
  tin: Sequelize.FLOAT,
});

const Image = connection.define('image', {
  obverse: Sequelize.STRING,
  reverse: Sequelize.STRING,
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
      description: 'Field that contains a designers name',
      resolve: obj => Designer.findById(obj.designer).then( res => res.dataValues),
    },
    issue: {
      type: IssueType,
      description: '...',
      resolve: obj => Issue.findById(obj.issue).then( res => res.dataValues),
    },
    images: {
      type: ImageType,
      description: 'Image object that contains 2 urls for coin images (obverse and reverse)',
      resolve: obj => Image.findById(obj.images).then( res => res.dataValues),
    },
    edge: {
      type: EdgeType,
      description: 'Describes the sides of the coins surface',
      resolve: obj => Edge.findById(obj.edge).then( res => res.dataValues),
    },
    composition: {
      type: CompositionType,
      description: 'What metals the coin is made up of',
      resolve: obj => Composition.findById(obj.composition).then( res => res.dataValues),
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
