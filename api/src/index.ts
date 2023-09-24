import { WebSocketServer } from "ws";

import { Logger } from "@/package/logger";
import { createInstance } from "@/lib/utils";
import { config } from "@/config/app";

const logger = Logger.create("server");

const wss = createInstance(WebSocketServer, { port: config.wss.port });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
});

logger.log("wss has started on port", config.wss.port);
