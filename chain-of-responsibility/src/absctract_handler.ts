import { Handler } from "./handler";

export abstract class AbstractHandler implements Handler {
  
  next!: Handler;

  use(h: Handler) {
    this.next = h;
    return this.next;
  }
  
  get(url: string, callback: (data: any) => void) {
    if (this.next) {
      return this.next.get(url, callback);
    }
  }
}