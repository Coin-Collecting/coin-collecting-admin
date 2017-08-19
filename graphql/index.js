import express from "express";
import GraphQLHTTP from "express-graphql";
import schema from "./schema";

const port = 5000;
const app = express();

const Chalk = require('chalk');
const cors = require('cors');

app.use('/graphi',express.static(`${__dirname}/public`)); // we could have just used the `graphiql` option: https://github.com/graphql/express-graphql

app.use('/graphql', cors(), GraphQLHTTP(() => ({
  schema: schema,
  graphiql: true,
})));
app.listen(port);

console.log(`Started on ${Chalk.underline.blue(`http://localhost:${port}/`)}`);