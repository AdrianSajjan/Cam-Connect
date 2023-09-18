import http from "http";

export class Server {
  readonly port: number;
  readonly host: string;
  readonly server: http.Server;

  static create(props: { host?: string; port: number }) {
    return new Server(props);
  }

  constructor({ host, port }: { host?: string; port: number }) {
    this.port = port;
    this.host = host ?? "localhost";
    this.server = http.createServer(this.listener);
  }

  private listener(
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) {}

  serve(callback?: () => void) {
    this.server.listen(() => {
      console.log(`Server has started on ${this.host}:${this.port}`);
      callback?.();
    });
  }
}
