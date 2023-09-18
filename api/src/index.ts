import { Server } from "@/package/server";

const server = Server.create({ port: 5000 });

server.serve();
