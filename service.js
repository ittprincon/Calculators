const url = require("url");
const calculator = require("./calculator.js");
exports.calculatorRequest = function(req, res) {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.query.name) {
  }
  const dec = decodeURI();
  const response = "200 OK" + result;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
};
module.exports = service;
