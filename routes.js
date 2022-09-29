module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello from app-test-2!");
  });

  app.get("/test", (req, res) => {
    res.send("Testing routes app-test-2");
  });

  return app;
};
