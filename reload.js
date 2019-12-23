'use strict';
(() => {
  const requireNoCache = (file) => {
    const solved = require.resolve(file)
    delete require.cache[solved]
    return require(solved)
  }

  module.exports = (express, routeFile) => {
    const r = express.Router()
    requireNoCache(routeFile)
      .forEach(x => r[x.method](x.path, x.code))
    return r
  }
})()
