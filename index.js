// import rp from 'request-promise'
// import fs from 'fs'
const fs = require('fs')
const rp = require('request-promise')
const invisionData = require('designtokens.config.example.js')
renderStyles = async (dataArray) => {
  await dataArray.map(async data => {
    const e = await rp(data.url)
    let options = {encoding: 'UTF8'};
    let writeStream = fs.createWriteStream(data.location, options);
    writeStream.write(String(e))
    writeStream.on('finish', () => {
    })
  })
}

renderStyles(invisionData)