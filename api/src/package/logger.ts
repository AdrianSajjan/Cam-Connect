import { colors } from "@/config/console";
import { createInstance } from "@/lib/utils";

export class Logger {
  private context: string;

  public constructor(context: string) {
    this.context = context;
  }

  public static create(context: string) {
    console.log("\n");
    return createInstance(Logger, context);
  }

  private time() {
    const date = new Date();
    return date.toISOString();
  }

  public print(message?: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }

  public log(message?: any, ...optionalParams: any[]) {
    console.log(
      `${colors.foreground.blue}[${this.context}]${colors.foreground.green}`,
      message,
      ...optionalParams
    );
  }
}
