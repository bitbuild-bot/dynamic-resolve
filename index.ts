import path = require("path");
import fs = require("fs");

class ResolveFile {
    /**
      *
      * @param {string} pathTo Path in which the program should search for the file
      * @param {string} file File to find
      * @param {"forward" | "backward"} direction Type of search. 
      * If backward the search will start from the existing path and goes until the root path. 
      * If forward the search will start from the exisitng path and goes until the it does not find the file
      * @return {string} The exact path to the file
    */
    static search(pathTo: string, file: string, direction?: "forward" | "backward"): string {
        // Reducing call stack count
        if (!fs.existsSync(path.resolve(pathTo))) {
            console.log(`Path not found: ${path.resolve(pathTo)}`)
            // Returning NULL if the path is not found!
            return "NULL";
        }
        pathTo = path.resolve(pathTo);

        const startPath = path.join(pathTo, file);
        const exists = fs.existsSync(startPath);

        if (!exists) {
            const nextPath = pathTo.split("\\" || "/")

            nextPath.pop();

            let _nextPath = nextPath.join("\\" || "/");

            this.search(_nextPath, file);
        } else {
            return startPath;
        }

        return startPath;
    }
};

export default ResolveFile;