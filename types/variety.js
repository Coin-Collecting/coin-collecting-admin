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

// QUERIES
import {
  Edge,
  Designer,
  Issue,
  Image,
  Composition,
} from '../queries';

// VARIETY TYPE
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
