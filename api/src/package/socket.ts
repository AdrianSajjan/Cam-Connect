import http from "node:http";

interface CreateWebSocket {
  server?: http.Server;
}

export class WebSocket {
  private server: http.Server;

  constructor(props?: CreateWebSocket) {
    this.server = http.createServer();
  }

  public static create(props?: CreateWebSocket) {
    return new WebSocket(props);
  }
}
