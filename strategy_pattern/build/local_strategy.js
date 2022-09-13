"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
class LocalStrategy {
    authenticate(args) {
        const [username, password] = args;
        if (username !== "bytefer" && password !== "666") {
            console.log("Incorrect username or password!");
            return false;
        }
        console.log("Account and password authentication succeeded!");
        return true;
    }
}
exports.LocalStrategy = LocalStrategy;
