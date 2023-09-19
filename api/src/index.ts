import { Server } from "@/package/server";
import { WebSocket } from "@/package/socket";

const server = Server.create()
  .middleware({
    isGlobal: true,
    middleware: (req, res) => {},
  })
  .handler({
    route: "/",
    method: "GET",
    handler: (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" }).end(
        JSON.stringify({
          url: req.url,
          method: req.method,
          message: "Server is up and running",
        })
      );
    },
  })
  .handler({
    route: "/api",
    method: "GET",
    handler: (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" }).end(
        JSON.stringify({
          url: req.url,
          method: req.method,
          message: "API is up and running",
        })
      );
    },
  })
  .serve();

WebSocket.create({ server: server.instance });
