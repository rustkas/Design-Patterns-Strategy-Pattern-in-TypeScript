import fs from "fs";
export abstract class FileParser {
  
	// Template Method
  parse(filePath: string) {
    const content = this.readFile(filePath);
		if(content){
			const fileData = this.parseFile(content);
			this.processData(fileData);
		}
    
  }
  
	readFile(filePath: string) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf8");
    }
  }
  
	abstract parseFile(fileContent: string): any;
  
	processData(fileData: any[]) {
    console.log(fileData);
  }
}