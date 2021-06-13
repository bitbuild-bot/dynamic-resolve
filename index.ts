import path = require("path");
import fs = require("fs");

class ResolveFile {
    /**
      *
      * @param {string} pathTo Path in which the program should search for the file
      * @param {string} file File to find
      * @return {string} The exact path to the file
    */
    static search(pathTo: string, file: string): string {
        const result = "";
        // Reducing call stack count
        pathTo = path.resolve(pathTo);

        const startPath = path.join(pathTo, file);
        const exists = fs.existsSync(startPath);

        if (!exists) {
            const nextPath = pathTo.split("\\" || "/")

            nextPath.pop();

            let _nextPath = nextPath.join("\\" || "/");

            this.search(_nextPath, file);
        } else {
            console.log("Here is the path:", startPath);

            return result.concat(startPath);
        }

        return result;
    }
};

export default ResolveFile;