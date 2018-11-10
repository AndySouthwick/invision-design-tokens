#!/usr/bin/env node
const fs = require('fs')
if (fs.existsSync('node_modules/invision-design-tokens/designtokens.config.js')) {
  const invisionData = require('./designtokens.config')
  console.log(invisionData)
}else{
  console.log('you need to create your config dsm-config url, location, iconDir, or icons to set up your config')
}
