#!/usr/bin/env node
const fs = require('fs')
const[,, ...args] = process.argv

// section
const createWriteToConfig = (data) => {
    console.log('from createWriteToConfig', data)
    let writeDataExports = `module.exports = [${data}]`
    fs.writeFile('node_modules/invision-design-tokens/designtokens.config.js', writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully created config file")
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
      console.log(combinedArgs1)
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

  }
}
// section


checkForDataRewrite = (key) => {
  const invisionData = require('./designtokens.config')
  let appendData = invisionData[0]
  if(key === 'url'){
    let updatedData = {"url": args[1], "location": appendData.location}
    let writeDataExports = `module.exports = [${JSON.stringify(updatedData)}]`
    fs.writeFile('node_modules/invision-design-tokens/designtokens.config.js',  writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully updated config file")
    })
  }
  if(key === 'location'){
    let updatedData = {"location": args[1], "url": appendData.url}
    let writeDataExports = `module.exports = [${JSON.stringify(updatedData)}]`
    fs.writeFile('node_modules/invision-design-tokens/designtokens.config.js',  writeDataExports, (err) => {
      if(err) log(err);
      console.log("successfully updated config file")
    })
  }
}



// section
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
}else{

}
