import path = require("path");
import fs = require("fs");

/**
 * 
 * @param {string} pathTo Path in which the program should search for the file
 * @param {string} file File to find
 * @return {void}
 */
function resolveFile(pathTo: string, file: string): string {
    let parsed: string = "";
    pathTo = path.resolve(pathTo);

    const availablePaths: string[] = pathTo.split("\\") || pathTo.split("/");

    for (let i = 0; i < availablePaths.length; i++) {
        availablePaths.pop();
        availablePaths.join("");

        const activePath: string = path.join(...availablePaths);

        availablePaths.pop();


        try {
            const fileA: string = fs.readFileSync(path.join(activePath, file)).toString();

            parsed = fileA;

            return parsed;
        } catch (e) {
            return resolveFile(activePath, file);
        }
    }

    return parsed;
};

export default resolveFile;