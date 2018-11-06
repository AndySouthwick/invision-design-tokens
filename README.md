# Invision Design Tokens
for use with invision DSM

## Install Instructions

run `npm i invision-design-tokens` in your command line

### install Concurrently

 run `npm i concurrently` in your command line

for angular change your start script in your package.json to look like this

`"start": "concurrently \"ng serve\" \"node node_modules/invision-design-tokens/index.js\"",`


### create config file

at your project root directory create `designtokens.config.js`
this is where we will be able to tell invision-design-tokens what url end point to look at to get the dsm styles from

### add your url endpoints that DSM has provided into the config file

`module.exports = [
  {"url": "<YOUR INVISION DSM SASS URL>",
    "location": "node_modules/invision-design-tokens/style-params.scss"},
  {"url": "<YOUR INVISION DSM LESS URL>",
    "location": "node_modules/invision-design-tokens/style-params.less"},
  {"url": "<YOUR INVISION DSM STYLUS URL>",
    "location": "node_modules/invision-design-tokens/style-params.styl"},
]`


Thats it, any time you want the latest styles from your invision design system manager just run the `npm start`

you can now use your tokens in your chosen preprocessor style

LESS: `@import invision-design-tokens/style-params.less`

SASS: `@import invision-design-tokens/style-params.scss`

STYLUS: `@import invision-design-tokens/style-params.styl`



