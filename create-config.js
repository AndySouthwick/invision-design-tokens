#!/usr/bin/env node

const log = require('log')
const fs = require('fs')
const[,, ...args] = process.argv
// section
const createWriteToConfig = (data) => {
    console.log('from createWriteToConfig', data)
    let writeDataExports = `module.exports = [${data}]`
    fs.writeFile('./invision-design-tokens/designtokens.config.js', writeDataExports, (err) => {
      if(err) log(err);
      if (!fs.existsSync('./invision-design-tokens/designtokens.config.js')) {
        console.log("successfully created config file")
      }else{
        console.log("successfully updated config file")
      }
    })
}
// section

appendToConfigObject = () => {
  const invisionData = require('./designtokens.config')
  let appendData = invisionData[0]
  switch(args[0]){
    case 'url':
      let data1 = {"url": args[1]}
      let combinedArgs1 = Object.assign(data1, appendData)
      if(appendData.url) {
        checkForDataRewrite('url')
      }else{
        createWriteToConfig(JSON.stringify(combinedArgs1))
      }
      break;
    case 'location':
    let data2 = {"location": args[1]}
    let combinedArgs2 = Object.assign(data2, appendData)
    console.log('stringified obj', JSON.stringify(combinedArgs2))
    if(appendData.location) {
      checkForDataRewrite('location')
    }else{
      createWriteToConfig(JSON.stringify(combinedArgs2))
    }
    break;
    case 'icons':
    let data3 = {"icons": args[1]}
    let combinedArgs3 = Object.assign(data3, appendData)
    console.log('from icons', JSON.stringify(combinedArgs3))
    if(appendData.icons) {
      checkForDataRewrite('icons')
    }else{
      createWriteToConfig(JSON.stringify(combinedArgs3))
    }
    break;
    case 'iconDir':
      let data4 = {"iconDir": args[1]}
      let combinedArgs4 = Object.assign(data4, appendData)
      console.log('iconDir', JSON.stringify(combinedArgs4))
      if(appendData.iconDir) {
        checkForDataRewrite('iconDir')
      }else{
        createWriteToConfig(JSON.stringify(combinedArgs4))
      }
      break;
    default:
      console.log('please use dsm-config icons, iconDir, location, or url to update')
  }
}
// section

checkForDataRewrite = (key) => {
  const invisionData = require('./designtokens.config')
  let appendData = invisionData[0]
  if(key === 'url'){
    let updatedData = {"url": args[1], "location": appendData.location}
    let writeDataExports = `module.exports = [${JSON.stringify(updatedData)}]`
    fs.writeFile('./invision-design-tokens/designtokens.config.js',  writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully updated config file")
    })
  }
  if(key === 'location'){
    let updatedData = {"location": args[1], "url": appendData.url}
    let writeDataExports = `module.exports = [${JSON.stringify(updatedData)}]`
    fs.writeFile('./invision-design-tokens/designtokens.config.js',  writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully updated config file")
    })
  }
  if(key === 'iconDir'){
    let updatedData = {"location": args[1], "url": appendData.url}
    let writeDataExports = `module.exports = [${JSON.stringify(updatedData)}]`
    fs.writeFile('./invision-design-tokens/designtokens.config.js',  writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully updated config file")
    })
  }
  if(key === 'icons'){
    let updatedData = {"location": args[1], "url": appendData.url}
    let writeDataExports = `module.exports = [${JSON.stringify(updatedData)}]`
    fs.writeFile('./invision-design-tokens/designtokens.config.js',  writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully updated config file")
    })
  }
}

// section

  if (fs.existsSync('./invision-design-tokens/designtokens.config.js')) {
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
        break;
      case 'icons':
        let data3 = `{"${args[0]}": "${args[1]}"}`
        createWriteToConfig(data3)
        break;
      case 'iconDir':
        let data4 = `{"${args[0]}": "${args[1]}"}`
        createWriteToConfig(data4)
    }

  }
