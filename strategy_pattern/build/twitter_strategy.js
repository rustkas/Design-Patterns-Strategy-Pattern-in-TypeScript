"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterStrategy = void 0;
class TwitterStrategy {
    authenticate(args) {
        const [token] = args;
        if (token !== "tw123") {
            console.error("Twitter account authentication failed!");
            return false;
        }
        console.log("Twitter account authentication succeeded!");
        return true;
    }
}
exports.TwitterStrategy = TwitterStrategy;
