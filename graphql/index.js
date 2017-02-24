import express from "express";
import GraphQLHTTP from "express-graphql";

const app = express();

import schema from "./schema";

app.use(GraphQLHTTP({
  schema,
  graphiql: true,
}))

app.listen(5000);
