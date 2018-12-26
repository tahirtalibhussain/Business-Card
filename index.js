#! /usr/bin/env node
const {bold, blueBright, red, white}= require('colorette');
const boxen = require('boxen');


const work = white(`CFO @ ${blueBright('BlockHack')}`)
const github = blueBright('https://github.com/tahirtalibhussain')
const gmail = blueBright('tahirtalib53@gmail.com')
const facebook = blueBright('https://www.facebook.com/tahir.talib.376')
const linkedin = blueBright('https://www.linkedin.com/in/tahir-talib-hussain/')
const npm = blueBright('https://www.npmjs.com/~tahirtalib53')
const npx = blueBright('npx tahirtalib')

const newLine= '\n'
const heading =     `${red(bold('               Tahir Talib Hussain'))}` 
const working =     `${red(bold('       Work :'))}      ${work}`
const githubing =   `${red(bold('       Github :  '))}  ${github}`
const gmailing =    `${red(bold('       Gmail :    '))} ${gmail}`
const facebooking = `${red(bold('       Facebook :  '))}${facebook}`
const linkedining = `${red(bold('       LinkedIn :  '))}${linkedin}`
const npming =      `${red(bold('       NPM :    '))}   ${npm}`
const npxing =      `${red(bold('       Card :   '))}   ${npx}`

let output = `${newLine} ${newLine}${newLine} ${heading} ${newLine} ${newLine} ${working} ${newLine} ${githubing} ${newLine} ${gmailing} ${newLine} ${facebooking} ${newLine} ${linkedining} ${newLine} ${npming} ${newLine} ${npxing} ${newLine} ${newLine}`;
const options = {
    padding: 1,
    margin: 0,
    borderStyle: 'double'
}
output = red(boxen(output,options))
console.log(output);