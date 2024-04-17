// JSON Server module
const jsonServer = require("json-server");
const fs = require("fs");
const path = require('path');
const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))

const router = jsonServer.router(db);



server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Add this before server.use(router)
server.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico');
})

server.use(router);


server.listen(3000, () => {
    console.log("JSON");
});

module.exports = server;