// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");

// Make sure to use the default middleware

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Add this before server.use(router)
server.use(
    // Add custom route here if needed
    jsonServer.rewriter({
        "/*": "/$1",
    })
);
server.use(router);
server.listen(3000, () => {
    console.log("JSON");
});

module.exports = server;