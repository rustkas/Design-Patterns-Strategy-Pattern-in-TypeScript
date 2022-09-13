import { AuthMiddleware } from "./auth_middleware";
import { LoggerMiddleware } from "./logger_middleware";
import { Route } from "./route";

const route = new Route();
route.use(new AuthMiddleware("bytefer", "666"))
 .use(new LoggerMiddleware());
route.get("/api/todos", (data) => {
  console.log(JSON.stringify({ data }, null, 2));
});
route.get("/api/random", (data) => {
  console.log(data);
});