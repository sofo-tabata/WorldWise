// api/start-server.js
const { exec } = require("child_process");

module.exports = async (req, res) => {
  exec("npm run server", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting JSON Server: ${error}`);
      res.status(500).send("Error starting JSON Server");
      return;
    }
    console.log(`JSON Server started. STDOUT: ${stdout}`);
    console.error(`STDERR: ${stderr}`);
    res.status(200).send("JSON Server started successfully");
  });
};
