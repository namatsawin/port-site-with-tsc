const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/auth", "/api", "/graphql"],
    createProxyMiddleware({
      target: "https://localhost:5000",
    })
  );
};
