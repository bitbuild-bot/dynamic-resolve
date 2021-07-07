import path = require("path");
import fs = require("fs");

/**
     * Get directories inside a directory
     * @param {string} directory Directory to extract folders from
     * @returns {string[]} An array of directories
     */
function getDir(directory: string): string[] {
    let result: string[] = [];

    for (let content in fs.readdirSync(directory)) {
        if (fs.statSync(path.resolve(directory, content)).isDirectory()) {
            result.push(content);
        }
    }

    return result;
}

class ResolveFile {
    /**
      *
      * @param {string} pathTo Path in which the program should search for the file
      * @param {string} file File to find
      * @param {"forward" | "backward"} direction Type of search. 
      * If backward the search will start from the existing path and goes until the root path. 
      * If forward the search will start from the exisitng path and goes until the it does not find the file
      * @return {string} The exact path to the file Returns NULL if the 
    */
    static backwardSearch(pathTo: string, file: string): string | undefined {
        if (!fs.existsSync(path.resolve(pathTo))) {
            throw new Error(`Path not found: ${path.resolve(pathTo)}`)
        }

        const startPath = path.join(pathTo, file);
        const exists = fs.existsSync(startPath);

        try {
            if (!exists) {
                const nextPath = pathTo.split("\\" || "/");
    
                nextPath.pop();
    
                let _nextPath = nextPath.join("\\" || "/");
    
                this.backwardSearch(_nextPath, file);
            } 
            
            return startPath;
        } catch(e) {
            throw new Error("File Not found");
        }
    }
};

export default ResolveFile;