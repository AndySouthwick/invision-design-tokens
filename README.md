# Invision Design Tokens
for use with invision DSM

## INSTALL INSTRUCTIONS

run `npm i invision-design-tokens` in your command line

### CREATE YOUR CONFIG INFORMATION

run `dsm-config url 'YOUR DSM URL FOR WHATEVER PREPROCESSOR YOU WANT TO USE'` in your command line

example `dsm-config url 'https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/_style-params.scss?key=Sye_KlJfCf'`

run `dsm-config location 'WHAT DIRECTORY YO UWANT YOU PREPROCESSED STYLES DOWNLOADED TO'` in your command line

example `dsm-config location 'node_modules/invision-design-tokens/style-parmas.scss'`

run `dsm-config icon 'YOUR DSM URL TO YOUR ICON.ZIP'` in your command line

example `dsm-config url 'https://projects.invisionapp.com/dsm-export/usana-dsm/usana-design-system/icons.zip?key=Sye_KlJfCf'`

run `dsm-config iconDir 'WHAT DIRECTORY YOU WANT YOUR ICONS TO BE IN'` in your command line

example `dsm-config iconDir 'src/assets/images/icons'`

### PULL THE SCRIPTS

run `dsm-pull`

### IMPORT YOUR PREPROCESSED STYLES    

LESS: `@import invision-design-tokens/style-params.less`

SASS: `@import invision-design-tokens/style-params.scss`

STYLUS: `@import invision-design-tokens/style-params.styl`


#### Thats it! you should be up and running with everything 

anytime you need to update your dsm files locally just run dsm-pull

if for whatever reason you need to update your config just run the `dsm-config` command with the the information you want to change

To see what is in your config file run `dsm-viewCon`

