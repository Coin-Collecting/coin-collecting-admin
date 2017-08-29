import express from "express";
import GraphQLHTTP from "express-graphql";
import schema from "./schema";
const { maskErrors } = require('graphql-errors');

let env = process.env.NODE_ENV || 'development';
let config = require('../config')[env];

const port = config.api.port;
const app = express();

const Chalk = require('chalk');
const cors = require('cors');

app.use('/graphi',express.static(`${__dirname}/public`)); // we could have just used the `graphiql` option: https://github.com/graphql/express-graphql

maskErrors(schema);

app.use('/graphql', cors(), GraphQLHTTP(() => ({
  schema: schema,
  graphiql: true,
})));
app.listen(port);

console.log(`Started on ${Chalk.underline.blue(`http://localhost:${port}/`)}`);