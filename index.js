const fs = require('fs')
const rp = require('request-promise')
const request = require('request')
const invisionData = require('./../../designtokens.config.js')
const Zip = require('adm-zip');




renderStyles = async (dataArray) => {
  try{
    await dataArray.map(async data => {
      if(data.location === 'icons.zip'){
        await request(data.url).pipe(fs.createWriteStream(data.location)).on('close', async () =>  {
          let zip = await new Zip(data.location);
          // get all entries and iterate them
          zip.getEntries().forEach(function() {
            zip.extractAllTo(data.unzippedlocation , true)
          })
        });
      }
      let e = await rp(data.url)
      let options = {encoding: 'UTF8'};
      let writeStream = fs.createWriteStream(data.location, options);
      writeStream.write(String(e))
      writeStream.on('finish', () => {
      })

    })
  }catch(e){
    console.log(e)
  }
}



renderStyles(invisionData)