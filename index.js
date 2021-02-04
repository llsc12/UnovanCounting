const discord = require('discord.js');
const Discord = require("discord.js"), fs = require("fs"), config = require("./config.json"); // Get all the requirements
const { bot_token, config_owner, prefix, hd, hj, ServerID, channelIDconfig} = require('./config.json')  // Get the config.json file into the main file
const client = new Discord.Client({ messageSweepInterval: 60, disableEveryone: true }) // Create a client
let lastnumber = 0

client.on("ready", async () => { // Logs response when started
    console.log('ready to count!')
    client.user.setPresence({status: "dnd"})
});
client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id = channelIDconfig) {
        //code to execute in-channel
        if (parseInt(message.content) == (lastnumber+1)) {
            message.react('✅')
            lastnumber = (parseInt(message.content))
        } else {
            message.react('❌')
            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
            lastnumber = 0
        }
        //end
    }
});

client.on('ready', () => {
    setInterval(() => {
        client.user.setActivity('Currently at '+lastnumber, { type: 'PLAYING' }); // sets to one of any in array
    }, 2000); // Runs this every 7 seconds.
    
});

client.login(bot_token)