const fs = require("fs");
const path = require("path");

const logReqRes = (logFilePath) => {
  return (req, res, next) => {
    const logFile = path.join(__dirname, logFilePath);
    const logEntry = `Time: ${new Date().toISOString()}, Method: ${req.method}, URL: ${req.url}\n`;

    // Append log entry to the file asynchronously
    fs.appendFile(logFile, logEntry, (err) => {
      if (err) {
        console.error("Failed to write to log file:", err.message);
      }
    });

    next(); // Ensure the request continues to the next middleware or route
  };
};

module.exports = logReqRes;