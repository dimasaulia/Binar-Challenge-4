const HttpServer = require("http");
const PATH = require("path");
const FS = require("fs");
const BASE_DIR = PATH.join(__dirname, "../public");
const data = require("../model/model");
class Server {
  #port;
  constructor(port) {
    this.#port = port;
  }

  #create() {
    return HttpServer.createServer((req, res) => this.#response(req, res));
  }

  #getHTML(html) {
    const htmlFile = PATH.join(BASE_DIR, html);
    return FS.readFileSync(htmlFile, "utf-8");
  }

  #response(req, res) {
    if (req.url === "/") {
      res.setHeader("Content-Type", "text-html");
      res.writeHead(200);
      res.end(this.#getHTML("index.html"));
    } else if (req.url === "/data") {
      res.setHeader("Content-Type", "json");
      res.writeHead(200);
      res.end(data("cars.json"));
    } else if (req.url === "/cars") {
      res.setHeader("Content-Type", "text-html");
      res.writeHead(200);
      res.end(this.#getHTML("cars.html"));
    } else if (req.url.match(".css$")) {
      let filePath = PATH.join(BASE_DIR, req.url);
      let fileStream = FS.createReadStream(filePath, "UTF-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
    } else if (req.url.match(".js$")) {
      let filePath = PATH.join(BASE_DIR, req.url);
      let fileStream = FS.createReadStream(filePath, "UTF-8");
      fileStream.pipe(res);
    } else if (req.url.match(".ttf$")) {
      let filePath = PATH.join(BASE_DIR, req.url);
      let fileStream = FS.createReadStream(filePath, "UTF-8");
      fileStream.pipe(res);
    } else if (
      req.url.match(".jpg$") ||
      req.url.match(".png$") ||
      req.url.match(".jpeg$") ||
      req.url.match(".svg$")
    ) {
      let filePath = PATH.join(BASE_DIR, req.url);
      const fileType = filePath.split(".")[1];
      res.writeHead(200, {
        "Content-Type": `${
          fileType === "svg" ? "image/svg+xml" : `image/${fileType}`
        }`,
      });
      FS.readFile(filePath, function (err, content) {
        res.end(content);
      });
    } else {
      res.setHeader("Content-Type", "text-html");
      res.writeHead(404);
      res.end("404");
    }
  }

  start() {
    this.#create().listen(this.#port, "0.0.0.0", () => {
      console.log(`OOP Server work on 0.0.0.0:${this.#port}`);
    });
  }
}

module.exports = Server;
