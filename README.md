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

### add your url endpoints that DSM has provided into the export

`module.exports = [
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/_style-params.scss?key=Sye_KlJfCf",
    "location": "node_modules/invision-design-tokens/style-params.scss"},
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/style-params.less?key=Sye_KlJfCf",
    "location": "node_modules/invision-design-tokens/style-params.less"},
  {"url": "https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/style-params.styl?key=Sye_KlJfCf",
    "location": "node_modules/invision-design-tokens/style-params.styl"},
]`


Thats it, any time you want the latest styles from your invision design system manager just run the `npm start`

you can now use your tokens in your chosen preprocessor style

scss: `@import invision-design-tokens/style-params.less`

less: `@import invision-design-tokens/style-params.scss`

stylus: `@import invision-design-tokens/style-params.styl`



