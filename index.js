var http = require("http");
//const fs = require("fs");
const path = require("path");
const grades = require("./grades");
const students = require("./students");

const dirPath = path.join(__dirname, "/public");

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000);
    res.writeHead(200, { "Content-Type": "application/json" });
    var url = req.url;
    if (url === "/") {
      res.end(JSON.stringify(students));
    } else if (url === "/api") {
      res.end(JSON.stringify(students));
    } else if (url === "/api/students") {
      res.end(JSON.stringify(students));
    } else if (url === "/api/faculty") {
      res.end(JSON.stringify(grades));
    }
  })
  .listen(process.env.PORT | 3000, function () {
    console.log("server start at port 3000");
  });
