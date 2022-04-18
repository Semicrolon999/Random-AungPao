const prompt = require('prompt-sync')();
const color = require('colors');
const axios = require('axios');
const fs = require('fs');
const { phone } = require('./config.json')
const setTitle = require('node-bash-title');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
setTitle('🍻  RANDOM AUNG PAO WALLET | UPDATE 1.0.0 | https://discord.gg/8bdt888gGj');

console.clear();
console.log(color.rainbow(`

╔═╗╦ ╦╔╗╔╔═╗╔═╗╔═╗╔═╗
╠═╣║ ║║║║║ ╦╠═╝╠═╣║ ║
╩ ╩╚═╝╝╚╝╚═╝╩  ╩ ╩╚═╝
Semicrolonت#0853 ON TOP
`));

const ams = prompt(color.yellow(`Amount Random : `));

const phonepacket = JSON.stringify({
    phone: phone
});

const voucher_regex = /(?<=gift.truemoney.com\/campaign\/\?v=)[A-z0-9]+/gi;
var randomstring = require("randomstring");
function bnk() {
    console.clear();
    for (let i = 0; i < ams; i++) {
        let vourh = (`https://gift.truemoney.com/campaign/?v=${randomstring.generate(18)}`);
        console.log(vourh)
        var logger = fs.createWriteStream('aungpao.txt', {
            flags: 'a' 
        })
        logger.write(`${vourh}\n`)
    }
    console.log(color.red(`RANDOM SUCCED AMOUNT = ${ams}`))
    setTimeout(function(){
        return false;
    }, 2000);
};

var truewallet = require('./CHECK URL/truewallet');

truewallet.redeemvouchers(phone, `https://gift.truemoney.com/campaign/?v=${randomstring.generate(18)}`)
.then(res => {
    console.log(res);
});

bnk();