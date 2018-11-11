const path = require('path')

module.exports = bin

function bin (name, binName) {
  const pkg = require(name + '/package.json')
  const pkgPath = path.join(require.resolve(name + '/package.json'), '..')

  if (!binName && typeof pkg.bin === 'string') return path.join(pkgPath, pkg.bin)
  if (!binName) binName = name

  if (!pkg.bin || !pkg.bin[name]) throw new Error('Could not find bin path')
  return path.join(pkgPath, pkg.bin[name])
}
