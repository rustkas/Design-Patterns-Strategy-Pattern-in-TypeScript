import { FileParser } from "./file_parser";
import { csvParse } from "d3-dsv";


export class CsvParser extends FileParser {
 
	parseFile(fileContent: string) {
    return csvParse(fileContent);
  }
	
}

