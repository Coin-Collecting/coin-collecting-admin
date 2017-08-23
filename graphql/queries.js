// SEQUELIZE
const Sequelize = require('sequelize');

const connection = new Sequelize("coins_db", "root", "Dalekini21", {
  'host': 'localhost',
  'port': '3306',
});

export const Coin = connection.define("coin", {
  variety: Sequelize.STRING,
  year: Sequelize.STRING,
  mint: Sequelize.STRING,
  mintage: Sequelize.STRING,
  keyDate: Sequelize.BOOLEAN,
  description: Sequelize.STRING,
});

export const Mint = connection.define("mint", {
  mark: Sequelize.STRING,
  name: Sequelize.STRING,
});

export const Variety = connection.define("variety", {
  issue: Sequelize.STRING,
  designer: Sequelize.STRING,
  images: Sequelize.STRING,
  edge: Sequelize.STRING,
  composition: Sequelize.STRING,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  mass: Sequelize.FLOAT,
  diameter: Sequelize.FLOAT,
});

export const Denomination = connection.define("denomination", {
  kind: Sequelize.STRING,
  val: Sequelize.FLOAT,
});

export const Edge = connection.define("edge", {
  type: Sequelize.STRING,
  note: Sequelize.STRING,
});

export const Designer = connection.define('designer', {
  name: Sequelize.STRING,
});

export const Issue = connection.define('issue', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  denomination: Sequelize.STRING,
  startYear: Sequelize.STRING,
  endYear: Sequelize.STRING,
});

export const Composition = connection.define("composition", {
  gold: Sequelize.FLOAT,
  silver: Sequelize.FLOAT,
  copper: Sequelize.FLOAT,
  nickel: Sequelize.FLOAT,
  brass: Sequelize.FLOAT,
  zinc: Sequelize.FLOAT,
  steel: Sequelize.FLOAT,
  tin: Sequelize.FLOAT,
});

export const Image = connection.define('image', {
  obverse: Sequelize.STRING,
  reverse: Sequelize.STRING,
});