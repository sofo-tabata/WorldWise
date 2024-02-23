const jsonServer = require("json-server");
const server = jsonServer.create();

// Path to JSON file
const dataFile = "data/cities.json";

// Add custom routes if needed
server.use("/custom-route", (req, res) => {
  res.json({ custom: "response" });
});

// Use default router
server.use(jsonServer.router(dataFile));

module.exports = server;
