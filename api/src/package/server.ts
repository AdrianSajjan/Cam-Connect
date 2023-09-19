import http from "node:http";

interface Listener {
  route: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  handler: (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => void;
}
interface Middleware {
  route?: string;
  method?: string;
  isGlobal?: boolean;
  middleware: (
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) => void;
}

interface CreateServer {
  host?: string;
  port?: number;
}

export class Server {
  private port: number;
  private host: string;
  private server: http.Server;
  private listeners: Listener[];
  private middlewares: Middleware[];

  get instance() {
    return this.server;
  }

  constructor(props?: CreateServer) {
    this.listeners = [];
    this.middlewares = [];
    this.port = props?.port ?? 8000;
    this.host = props?.host ?? "localhost";
    this.server = http.createServer(this.listen.bind(this));
  }

  public static create(props?: CreateServer) {
    return new Server(props);
  }

  private listen(
    req: http.IncomingMessage,
    res: http.ServerResponse<http.IncomingMessage>
  ) {
    const listener = this.listeners.find(
      (listener) => listener.route === req.url && req.method === listener.method
    );

    const globalMiddlewares = this.middlewares.filter(
      (middleware) => middleware.isGlobal
    );

    const routeSpecificMiddleware = this.middlewares.filter(
      (middleware) =>
        middleware.route === req.url &&
        req.method === middleware.method &&
        !middleware.isGlobal
    );

    globalMiddlewares.forEach((value) => value.middleware(req, res));
    routeSpecificMiddleware.forEach((value) => value.middleware(req, res));

    if (listener) {
      listener.handler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" }).end(
        JSON.stringify({
          route: req.url,
          method: req.method,
          message: "Route not found",
        })
      );
    }
  }

  public middleware(middleware: Middleware) {
    this.middlewares.push(middleware);
    return this;
  }

  public handler(listener: Listener) {
    this.listeners.push(listener);
    return this;
  }

  public serve(callback?: () => void) {
    this.server.listen(this.port, () => {
      console.log(`Server has started on ${this.host}:${this.port}`);
      callback?.();
    });
    return this;
  }
}
