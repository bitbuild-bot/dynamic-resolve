# dynamic-resolve

Resolves a file dynamically in between every single path provided

## Install

```
yarn add dynamic-resolve

or

npm install dynamic-resolve
```

## Usage

- import the one and only class in this package `ResolveFile`

`ResolveFile` has one static methods in it.

- **search** Will Search for the file path inside the entire path

```js
ResolveFile.search("node_modules/swudo", ".yarn_integrity");
//  This will find yarn integrity file node_modules as it searchs the entire one
```

# License

`resolve-file` is licensed under MIT
