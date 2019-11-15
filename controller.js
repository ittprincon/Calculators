const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  var service = require("./service.js");
  const requrl = url.parse(req.url, true);

  if (requrl.pathname == "/calculator" && req.method === "GET") {
    console.log("Request Type:" + req.method + " Endpoint: " + requrl.pathname);
    service.calculatorRequest(req, res);
  }
});
module.exports = controller;
