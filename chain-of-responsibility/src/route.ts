import { AbstractHandler } from "./absctract_handler";

export class Route extends AbstractHandler {

  urlDataMap: { [key: string]: any };

  constructor() {
    super();
    this.urlDataMap = {
      "/api/todos": [
        { title: "Learn Design Pattern" },
      ],
      "/api/random": () => Math.random(),
    };
  }

  get(url: string, callback: (data: any) => void) {
    super.get(url, callback);
  if (this.urlDataMap.hasOwnProperty(url)) {
      const value = this.urlDataMap[url];
      const result = typeof value === "function" ? value() : value;
      callback(result);
    }
  }

}