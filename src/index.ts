import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { ConnectMongoDb } from "./config/mongodb";
import { useMiddleWares } from "./config/middleWares";
import RouterPassport from "./router/passport";
import { PassportGoogle } from "./config/passportGoogle";
import { PortResolver } from "./resolvers/PortResolver";
import path from "path";

(async () => {
  const app = express();

  useMiddleWares(app);

  PassportGoogle();

  app.use(RouterPassport);

  await ConnectMongoDb();

  const schema = await buildSchema({
    resolvers: [UserResolver, PortResolver],
    emitSchemaFile: { path: "src/schema.graphql" },
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      return { req, res };
    },
  });

  server.applyMiddleware({ app, cors: false });

  app.use(express.static("public"));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });

  app.listen(process.env.PORT || 5000);
})();
