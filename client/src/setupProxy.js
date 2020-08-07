const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/auth", "/api", "/graphql", "/portfolio"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  );
};
