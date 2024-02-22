// api/fake-api.js
const { createServer } = require("http");
const { exec } = require("child_process");

// Start fake API server
exec("npm run server", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting fake API server: ${error}`);
    return;
  }
  console.log(`Fake API server stdout: ${stdout}`);
  console.error(`Fake API server stderr: ${stderr}`);
});

// Dummy response for the serverless function
module.exports = (req, res) => {
  res.status(200).json({ message: "Fake API server started" });
};
