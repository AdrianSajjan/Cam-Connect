import http from "http";
import dotenv from "dotenv";
import express from "express";
import socketio from "socket.io";

import { createInstance } from "@/lib/utils";
import { config } from "@/config/app";

dotenv.config();

const app = express();

const server = http.createServer(app);

const io = createInstance(socketio.Server, server);

io.on("connection", (socket) => {});

server.listen(config.server.port, () => {
  console.log("[application]: Server has started on port:", config.server.port);
});
