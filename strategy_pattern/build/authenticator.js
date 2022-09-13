"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
class Authenticator {
    constructor() {
        this.strategies = {};
    }
    use(name, strategy) {
        this.strategies[name] = strategy;
    }
    authenticate(name, ...args) {
        if (!this.strategies[name]) {
            console.error("Authentication policy has not been set!");
            return false;
        }
        return this.strategies[name].authenticate.apply(null, args);
    }
}
exports.Authenticator = Authenticator;
