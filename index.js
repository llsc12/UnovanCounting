const discord = require('discord.js');
const Discord = require("discord.js"), fs = require("fs"), config = require("./config.json"); // Get all the requirements
const { bot_token, config_owner, prefix, hd, hj, ServerID, channelIDconfig} = require('./config.json')  // Get the config.json file into the main file
const client = new Discord.Client({ messageSweepInterval: 60, disableEveryone: true }) // Create a client

client.on('message', message => {
    if (message.author.bot) return;
    if 
});