import path = require("path");
import fs = require("fs");

/**
 * 
 * @param {string} pathTo Path in which the program should search for the file
 * @param {string} file File to find
 * @return {void}
 */
function resolveFile(pathTo: string, file: string): string {
    // Reducing call stack count
    pathTo = path.resolve(pathTo);

    const startPath = path.join(pathTo, file);
    const exists = fs.existsSync(startPath);

    if (!exists) {
        const nextPath = pathTo.split("\\" || "/")

        nextPath.pop();

        let _nextPath = nextPath.join("\\" || "/");

        resolveFile(_nextPath, file);
    } else {
        console.log("Here is the path:", startPath);
        return startPath;
    }

    return startPath;
};

export default resolveFile;