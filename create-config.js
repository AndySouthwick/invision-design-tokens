#!/usr/bin/env node
const fs = require('fs')
const[,, ...args] = process.argv


const createWriteToConfig = (data) => {
    console.log('from createWriteToConfig', data)
    let writeDataExports = `module.exports = [${data}]`
    fs.writeFile('node_modules/invision-design-tokens/designtokens.config.js', writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully created config file")
    })
}

appendToConfigObject = () => {
  const invisionData = require('./designtokens.config')
  let appendData = invisionData[0]
  switch(args[0]){
    case 'url':
      let data1 = {"url": args[1]}
      let combinedArgs1 = Object.assign(data1, appendData)
      console.log(combinedArgs1)
      createWriteToConfig(combinedArgs1)
      break;
    case 'location':
      let data2 = {"location": args[1]}
      let combinedArgs2 = Object.assign(data2, appendData)
      console.log('stringified obj', JSON.stringify(combinedArgs2))
      createWriteToConfig(JSON.stringify(combinedArgs2))
  }
}

if(args[0] !== 'iconsUrl') {
  if (fs.existsSync('node_modules/invision-design-tokens/designtokens.config.js')) {
    appendToConfigObject()
  } else {
    switch (args[0]) {
      case 'url':
        let data1 = `{"${args[0]}": "${args[1]}"}`
        createWriteToConfig(data1)
        break;
      case 'location':
        let data2 = `{"${args[0]}": "${args[1]}"}`
        createWriteToConfig(data2)
    }
  }
}
