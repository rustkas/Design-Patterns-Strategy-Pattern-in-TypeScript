import { Strategy } from "./strategy";

export class LocalStrategy implements Strategy {
  authenticate(args: any[]) {
    const [username, password] = args;
    if (username !== "bytefer" && password !== "666") {
      console.log("Incorrect username or password!");
      return false;
    }
    console.log("Account and password authentication succeeded!");
    return true;
  }
}