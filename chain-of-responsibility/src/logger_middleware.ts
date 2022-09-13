import { AbstractHandler } from "./absctract_handler";

export class LoggerMiddleware extends AbstractHandler {
  
  get(url: string, callback: (data: any) => void) {
    console.log(`Request url is: ${url}`);
    return super.get(url, callback);
  }
}  