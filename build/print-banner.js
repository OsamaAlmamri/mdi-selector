

// build/print-banner.js
const packageInfo = require('../package.json')
const { text } = require('./banner.json')

process.stdout.write(text.replace('${version}', packageInfo.version))
process.stdin.pipe(process.stdout)

