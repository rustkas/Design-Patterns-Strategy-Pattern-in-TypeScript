import fs from "fs";
import path from "path";
import * as url from "url";
import { marked } from 'marked';

const __dirname = url.fileURLToPath(new URL("../data", import.meta.url));
const processData = (fileData: string) => console.dir(fileData);
const content = fs.readFileSync(path.join(__dirname, "Users.md"), "utf8");
const fileData = marked.parse(content);
processData(fileData);