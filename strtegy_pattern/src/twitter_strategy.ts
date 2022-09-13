import { Strategy } from "./strategy";

export class TwitterStrategy implements Strategy {
  authenticate(args: any[]) {
    const [token] = args;
    if (token !== "tw123") {
      console.error("Twitter account authentication failed!");
      return false;
    }
    console.log("Twitter account authentication succeeded!");
    return true;
  }
}