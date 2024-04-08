const path = require('path')

/** 获取当前应用版本号 */
module.exports.getAppVersion = () => {
  const pkgJson = require(path.resolve(__dirname, '../../package.json'))
  return pkgJson.version
}
