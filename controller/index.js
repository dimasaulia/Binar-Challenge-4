const ServerInit = require("../module/server");
require("dotenv").config;

const PORT = process.env.PORT || 8000;
const Server = new ServerInit(PORT);

// Server.start();
Server.start();
// Server.listen(SERVER, PORT);
