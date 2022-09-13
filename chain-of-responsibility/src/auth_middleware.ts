import { AbstractHandler } from "./absctract_handler";

export class AuthMiddleware extends AbstractHandler {
  
	isAuthenticated: boolean;
  
	constructor(username: string, password: string) {
    super();
    this.isAuthenticated = false;
    if (username === "bytefer" && password === "666") {
      this.isAuthenticated = true;
    }
  }
  
	get(url: string, callback: (data: any) => void) {
    if (this.isAuthenticated) {
      return super.get(url, callback);
    } else {
      throw new Error("Not Authorized");
    }
  }
}