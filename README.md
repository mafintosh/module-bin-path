# module-bin-path

Get the absolute file path to a bin entry of an installed dependency.
Useful if you want to include a cli as an npm dependency and spawn it from node.

```
npm install module-bin-path
```

## Usage

``` js
// let's assume npm install --save some-cli was include

const binPath = require('module-bin-path')
console.log('path to the bin entry', binPath('some-cli'))

// to spawn the included cli do

const child = childProcess.spawn(binPath('some-cli'), [ ... ])
```

## API

#### `const path = binPath(moduleName, [binEntry])`

Get the absolute path to a modules package.json bin entry.

`binEntry` is the bin entry name. Defaults to `moduleName`.

## License

MIT
