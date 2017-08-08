const http = require("http");
const express = require("express");
const path = require("path");

var app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src/client/index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "src/client/" + req.url));
});

const server = http.createServer(app);

server.listen(8000, () =>  {
    console.log("Listeniiiiiing");
});
