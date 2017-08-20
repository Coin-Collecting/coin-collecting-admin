// DEPENDENCIES
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID,
  GraphQLString,
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
} from "./types";

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
} from "./queries.js";

// QUERIES
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    coin: {
      type: CoinType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Coin.findById(args.id).then( res => res.dataValues),
    },
    coins: {
      type: new GraphQLList(CoinType),
      resolve: (root, args) => Coin.findAll()
    },
    composition: {
      type: CompositionType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Composition.findById(args.id).then( res => res.dataValues),
    },
    compositions: {
      type: new GraphQLList(CompositionType),
      resolve: (root, args) => Composition.findAll()
    },
    denomination: {
      type: DenominationType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Denomination.findById(args.id).then( res => res.dataValues),
    },
    denominations: {
      type: new GraphQLList(DenominationType),
      resolve: (root, args) => Denomination.findAll()
    },
    designer: {
      type: DesignerType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Designer.findById(args.id).then( res => res.dataValues),
    },
    designers: {
      type: new GraphQLList(DesignerType),
      resolve: (root, args) => Designer.findAll()
    },
    edge: {
      type: EdgeType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Edge.findById(args.id).then( res => res.dataValues),
    },
    edges: {
      type: new GraphQLList(EdgeType),
      resolve: (root, args) => Edge.findAll()
    },
    image: {
      type: ImageType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Image.findById(args.id).then( res => res.dataValues),
    },
    images: {
      type: new GraphQLList(ImageType),
      resolve: (root, args) => Image.findAll()
    },
    issue: {
      type: IssueType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Issue.findById(args.id).then( res => res.dataValues),
    },
    issues: {
      type: new GraphQLList(IssueType),
      resolve: (root, args) => Issue.findAll()
    },
    mint: {
      type: MintType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Mint.findById(args.id).then( res => res.dataValues),
    },
    mints: {
      type: new GraphQLList(MintType),
      resolve: (root, args) => Mint.findAll()
    },
    variety: {
      type: VarietyType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (root, args) => Variety.findById(args.id).then( res => res.dataValues),
    },
    varieties: {
      type: new GraphQLList(VarietyType),
      resolve: (root, args) => Variety.findAll()
    },
  }),
});

// MUTATIONS
const MutationType = new GraphQLObjectType({
  name: 'Mutations',
  description: 'These are the things we can change',
  fields: () => ({
    deleteCoin: {
      type: CoinType,
      description: 'Delete a coin with id',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (value, { id }) => Coin.destroy({where: { id: id }}),
    },
    createCoin: {
      type: CoinType,
      description: 'Create a new coin',
      args: {
        variety: { type: new GraphQLNonNull(GraphQLString) },
        mint: { type: new GraphQLNonNull(GraphQLString) },
        mintage: { type: new GraphQLNonNull(GraphQLFloat) },
        keyDate: { type: new GraphQLNonNull(GraphQLBoolean) },
        year: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve: (value, args) => Coin.create({
        variety: args.variety,
        mint: args.mint,
        mintage: args.mintage,
        keyDate: args.keyDate,
        year: args.year,
        description: args.description,
      }),
    },
    createIssue: {
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

        return Issue.create({
          name,
          description,
          denomination,
          startYear,
          endYear,
        });
      }
    },
    createVariety: {
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
    }
  }),
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
