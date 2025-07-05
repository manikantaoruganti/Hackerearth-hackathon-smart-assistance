// backend/historyLogger.js
const fs = require("fs");
const path = require("path");

function logUserPrompt(prompt) {
  const logFile = path.join(__dirname, "history.log");
  fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${prompt}\n`);
}

module.exports = { logUserPrompt };
