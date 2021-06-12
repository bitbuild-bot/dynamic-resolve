const { default: resolveFile } = require('./dist/index.js');

console.log(resolveFile("node_modules/colorette", ".yarn-integrity"));