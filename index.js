const fs = require('fs')
const rp = require('request-promise')
const request = require('request')
const invisionData = require('./../../designtokens.config.js')
const Zip = require('adm-zip');




renderStyles = async (dataArray) => {
  try{
    await dataArray.map(async data => {
      if(data.location === 'node_modules/invision-design-tokens/icons.zip'){
        await request(data.url).pipe(fs.createWriteStream("icons.zip")).on('close', function () {
          renderIcons()
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


renderIcons = async () => {

  try{
    let zip = new Zip("icons.zip");
    // get all entries and iterate them

    zip.getEntries().forEach(function() {
      zip.extractAllTo("node_modules/invision-design-tokens/icons", true)
    })
  }catch(e){
    console.log('the zip file came back bad please run again', e)
  }


}

renderStyles(invisionData)