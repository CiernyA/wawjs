require("../src/zip-server.js");
const fork = require('child_process').fork;
const client = "../uloha01/src/zip-client.js";

console.log("Server je schopny prevziat a skomprimovat textovy subor, nasledne klient vypise odpoved servera na konzolu.")
let chld = fork(client, ["../uloha01/test/test1.txt"]);
