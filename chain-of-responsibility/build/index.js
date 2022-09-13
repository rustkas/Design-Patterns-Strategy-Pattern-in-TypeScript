"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("./auth_middleware");
const logger_middleware_1 = require("./logger_middleware");
const route_1 = require("./route");
const route = new route_1.Route();
route.use(new auth_middleware_1.AuthMiddleware("bytefer", "666"))
    .use(new logger_middleware_1.LoggerMiddleware());
route.get("/api/todos", (data) => {
    console.log(JSON.stringify({ data }, null, 2));
});
route.get("/api/random", (data) => {
    console.log(data);
});
