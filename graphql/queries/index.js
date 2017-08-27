// DEPENDENCIES
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

// TYPES
import {
  CoinType,
  MintType,
  CompositionType,
  DenominationType,
  DesignerType,
  EdgeType,
  ImageType,
  IssueType,
  VarietyType,
} from "../types";

// Queries
import {
  Mint,
  Coin,
  Composition,
  Denomination,
  Designer,
  Edge,
  Image,
  Issue,
  Variety,
} from "../sequelize.js";

export const coin = {
  type: CoinType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Coin.findById(args.id).then( res => res.dataValues),
};

export const coins = {
  type: new GraphQLList(CoinType),
    resolve: (root, args) => Coin.findAll()
};

export const composition = {
  type: CompositionType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Composition.findById(args.id).then( res => res.dataValues),
};

export const compositions = {
  type: new GraphQLList(CompositionType),
    resolve: (root, args) => Composition.findAll()
};

export const denomination = {
  type: DenominationType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Denomination.findById(args.id).then( res => res.dataValues),
};

export const denominations = {
  type: new GraphQLList(DenominationType),
    resolve: (root, args) => Denomination.findAll()
};

export const designer = {
  type: DesignerType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Designer.findById(args.id).then( res => res.dataValues),
};

export const designers = {
  type: new GraphQLList(DesignerType),
    resolve: (root, args) => Designer.findAll()
};

export const edge = {
  type: EdgeType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Edge.findById(args.id).then( res => res.dataValues),
};

export const edges = {
  type: new GraphQLList(EdgeType),
    resolve: (root, args) => Edge.findAll()
};

export const image = {
  type: ImageType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Image.findById(args.id).then( res => res.dataValues),
};

export const images = {
  type: new GraphQLList(ImageType),
    resolve: (root, args) => Image.findAll()
};

export const issue = {
  type: IssueType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Issue.findById(args.id).then( res => res.dataValues),
};

export const issues = {
  type: new GraphQLList(IssueType),
    resolve: (root, args) => Issue.findAll()
};

export const mint = {
  type: MintType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Mint.findById(args.id).then( res => res.dataValues),
};

export const mints = {
  type: new GraphQLList(MintType),
    resolve: (root, args) => Mint.findAll()
};

export const variety =  {
  type: VarietyType,
    args: {id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (root, args) => Variety.findById(args.id).then( res => res.dataValues),
};

export const varieties = {
  type: new GraphQLList(VarietyType),
    resolve: (root, args) => Variety.findAll()
};