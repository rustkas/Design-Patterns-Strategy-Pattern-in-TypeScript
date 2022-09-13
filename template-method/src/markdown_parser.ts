import { marked } from 'marked';
import { FileParser } from "./file_parser";

export class MarkdownParser extends FileParser {
  parseFile(fileContent: string) {
    return marked.parse(fileContent);
  }
}