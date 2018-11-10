# Invision Design Tokens
for use with invision DSM

## Install Instructions

run `npm i invision-design-tokens` in your command line

### ANGULAR ONLY install Concurrently

 run `npm i concurrently` in your command line

for angular change your start script in your package.json to look like this

`"start": "concurrently \"ng serve\" \"node node_modules/invision-design-tokens/dsm.js\""`

### FOR REACT
change your start script in your package.json to look like this

   `"start": "react-scripts start | node node_modules/invision-design-tokens/dsm.js"`

### create config file

at your project root directory create `designtokens.config.js`
this is where we will be able to tell invision-design-tokens what url end point to look at to get the dsm styles from

### add your url endpoints that DSM has provided into the config file

The objects in the array is constructed with 2 key value pairs `url` is the dsm provided url to your tokens. the `location` is
whatever directory you want the file to be added to. I like to just leave mine in the node_module. There is a third key value pair called
icons which needs to be set to true so that the icons object runs in the right area of the function.


    `module.exports = [
    {"url": "<YOUR INVISION ICON DOWLOAD URL>",
    "location": "<WHERE YOU WANT YOUR ZIP FILE DOWNLOADED>",
    "icons": true}
     {"url": "<YOUR INVISION DSM SASS URL>",
    "location": "node_modules/invision-design-tokens/style-params.scss"},
      {"url": "<YOUR INVISION DSM LESS URL>",
    "location": "node_modules/invision-design-tokens/style-params.less"},
     {"url": "<YOUR INVISION DSM STYLUS URL>",
    "location": "node_modules/invision-design-tokens/style-params.styl"},
    ]`


Thats it, any time you want the latest styles from your invision design system manager just run `npm start`

### For AngularJS there might not be a start script so you can just run the script by itself to do the pull each time you need to update the tokens locally.

run in your command line

`node node_modules/invision-design-tokens/dsm.js`

you can now use your tokens in your chosen preprocessor style

LESS: `@import invision-design-tokens/style-params.less`

SASS: `@import invision-design-tokens/style-params.scss`

STYLUS: `@import invision-design-tokens/style-params.styl`



