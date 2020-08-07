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
import { PortfolioModel } from "./entity/Portfolio";

(async () => {
  const app = express();

  useMiddleWares(app);

  PassportGoogle();

  app.use(RouterPassport);

  await ConnectMongoDb();

  app.get("/api/portfolios", async (_req, res) => {
    const ports = await PortfolioModel.find();
    res.send(ports);
  });

  app.get("/port/:id", async (req, res) => {
    const port = await PortfolioModel.findOne({ handlePath: req.params.id });
    if (port) {
      res.redirect(`https://portfolio-care.herokuapp.com/?${req.params.id}`);
    } else {
      res.redirect(`https://portfolio-care.herokuapp.com/`);
    }
  });

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

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));

    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "public", "index.html"));
    });
  }

  app.listen(process.env.PORT || 5000);
})();
