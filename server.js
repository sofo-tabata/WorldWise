import https from "https";
import fs from "fs";
import path from "path";

const PORT = process.env.PORT || 8000;

const options = {
  key: fs.readFileSync(path.join(__dirname, "ssl", "private.key")),
  cert: fs.readFileSync(path.join(__dirname, "ssl", "certificate.crt")),
};

const server = https.createServer(options, (req, res) => {
  if (req.url === "/cities" && req.method === "GET") {
    // Construct the path to the cities.json file
    const citiesFilePath = path.join(__dirname, "data", "cities.json");

    // Read data from cities.json file
    fs.readFile(citiesFilePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
