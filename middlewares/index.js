const fs = require("fs");

function logRequest(fileName) {
  return (req, res, next) => {
    const log = `\n${new Date().toISOString()}-${req.method}-${req.url}`;
    fs.appendFile(fileName, log, (err) => {
      if (err) {
        console.error("Error writing to log file", err);
      } else {
        console.log("Log written successfully");
      }
    });
  };
}

module.exports = logRequest;
