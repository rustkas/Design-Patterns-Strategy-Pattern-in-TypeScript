import path from "path";
import * as url from "url";


import { CsvParser } from "./csv_parser";
import { MarkdownParser } from "./markdown_parser";


const __dirname = url.fileURLToPath(new URL("../data", import.meta.url));
const csvParser = new CsvParser();
csvParser.parse(path.join(__dirname, "Users.csv"));
const mdParser = new MarkdownParser();
mdParser.parse(path.join(__dirname, "Users.md"));