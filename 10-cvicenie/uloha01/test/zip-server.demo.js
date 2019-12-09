require("../src/zip-server.js");
//const { execFile } = require("child_process");
const fork = require('child_process').fork;

console.log("Server je schopny prevziat a skomprimovat textovy subor, nasledne klient vypise odpoved servera na konzolu.")
fork("../src/zip-client.js", ["test1.txt"]);

