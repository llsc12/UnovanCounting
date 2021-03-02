const Discord = require("discord.js"), fs = require("fs"), config = require("./config.json"); // Get all the requirements
const { bot_token, config_owner, prefix, ServerID, channelIDconfig} = require('./config.json')  // Get the config.json file into the main file
const client = new Discord.Client({ messageSweepInterval: 60, disableEveryone: true }) // Create a client
let lastnumber = 0
let usernamelast = '@£%$£$^%$'

client.on("ready", () => { // Logs response when started
    console.log('ready to count!')
    client.user.setPresence({status: "dnd"})
    let countchannel = client.channels.cache.get(channelIDconfig)
    countchannel.setTopic('Current number: '+lastnumber)
});

client.on('message', (message) => {
    let countchannel = client.channels.cache.get(channelIDconfig)
    if (message.content.includes('<@!'+client.user.id+'>')) return message.channel.send('don\'t ping me again, i\'m on dnd. also we at '+lastnumber+'.')
    if (message.content.startsWith(prefix+'count')) {
        let args = message.content.split(" ")
        if (message.author.id != config_owner) return;
        lastnumber = parseInt(args[1])
        message.react('✅')
        countchannel.setTopic('Current number: '+lastnumber)
        message.delete({timeout: 2000})
        return; //made by llsc12
    }
    if (message.content.startsWith('0')) {
    if (message.author.bot) return;
    if (message.channel.id != channelIDconfig) return;
    //code to execute in-channel
    let args = message.content.split(" ")
    if (parseInt(message.content) == (lastnumber+1)) {
        if (message.author.tag == usernamelast) {
            message.react('❌')
            message.channel.send('bruh, no double counting. anyways, starting at 0')
            lastnumber = 0
            usernamelast = '@£%$£$^%$'
            return;
        } else {
        message.react('✅')
        lastnumber = (parseInt(message.content))
        usernamelast = message.author.tag
        countchannel.setTopic('Current number: '+lastnumber)
        }
    } else {
        message.react('❌')
        message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
        lastnumber = 0
        usernamelast = '@£%$£$^%$'
    }
    //end
    }
    else if (message.content.startsWith('1')) {
        if (message.author.bot) return;
        if (message.channel.id != channelIDconfig) return; 
        //code to execute in-channel
        let args = message.content.split(" ")
        if (parseInt(message.content) == (lastnumber+1)) {
            if (message.author.tag == usernamelast) {
                message.react('❌')
                message.channel.send('bruh, no double counting. anyways, starting at 0')
                lastnumber = 0
                usernamelast = '@£%$£$^%$'
                return;
            } else {
            message.react('✅')
            lastnumber = (parseInt(message.content))
            usernamelast = message.author.tag
            countchannel.setTopic('Current number: '+lastnumber)
            }
        } else {
            message.react('❌')
            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
            lastnumber = 0
            usernamelast = '@£%$£$^%$'
        }
        //end
        }
        else if (message.content.startsWith('2')) {
            if (message.author.bot) return;
            if (message.channel.id != channelIDconfig) return; 
            //code to execute in-channel
            let args = message.content.split(" ")
            if (parseInt(message.content) == (lastnumber+1)) {
                if (message.author.tag == usernamelast) {
                    message.react('❌')
                    message.channel.send('bruh, no double counting. anyways, starting at 0')
                    lastnumber = 0
                    usernamelast = '@£%$£$^%$'
                    return;
                } else {
                message.react('✅')
                lastnumber = (parseInt(message.content))
                usernamelast = message.author.tag
                countchannel.setTopic('Current number: '+lastnumber)
                }
            } else {
                message.react('❌')
                message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                lastnumber = 0
                usernamelast = '@£%$£$^%$'
            }
            //end
            }
            else if (message.content.startsWith('3')) {
                if (message.author.bot) return;
                if (message.content.startsWith('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                if (message.channel.id != channelIDconfig) return; 
                //code to execute in-channel
                let args = message.content.split(" ")
                if (parseInt(message.content) == (lastnumber+1)) {
                    if (message.author.tag == usernamelast) {
                        message.react('❌')
                        message.channel.send('bruh, no double counting. anyways, starting at 0')
                        lastnumber = 0
                        usernamelast = '@£%$£$^%$'
                        return;
                    } else {
                    message.react('✅')
                    lastnumber = (parseInt(message.content))
                    usernamelast = message.author.tag
                    countchannel.setTopic('Current number: '+lastnumber)
                    }
                } else {
                    message.react('❌')
                    message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                    lastnumber = 0
                    usernamelast = '@£%$£$^%$'
                }
                //end
                }
                else if (message.content.startsWith('4')) {
                    if (message.author.bot) return;
                    if (message.channel.id != channelIDconfig) return; 
                    //code to execute in-channel
                    let args = message.content.split(" ")
                    if (parseInt(message.content) == (lastnumber+1)) {
                        if (message.author.tag == usernamelast) {
                            message.react('❌')
                            message.channel.send('bruh, no double counting. anyways, starting at 0')
                            lastnumber = 0
                            usernamelast = '@£%$£$^%$'
                            return;
                        } else {
                        message.react('✅')
                        lastnumber = (parseInt(message.content))
                        usernamelast = message.author.tag
                        countchannel.setTopic('Current number: '+lastnumber)
                        }
                    } else {
                        message.react('❌')
                        message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                        lastnumber = 0
                        usernamelast = '@£%$£$^%$'
                    }
                    //end
                    }
                    else if (message.content.startsWith('5')) {
                        if (message.author.bot) return;
                        if (message.channel.id != channelIDconfig) return; 
                        //code to execute in-channel
                        let args = message.content.split(" ")
                        if (parseInt(message.content) == (lastnumber+1)) {
                            if (message.author.tag == usernamelast) {
                                message.react('❌')
                                message.channel.send('bruh, no double counting. anyways, starting at 0')
                                lastnumber = 0
                                usernamelast = '@£%$£$^%$'
                                return;
                            } else {
                            message.react('✅')
                            lastnumber = (parseInt(message.content))
                            usernamelast = message.author.tag
                            countchannel.setTopic('Current number: '+lastnumber)
                            }
                        } else {
                            message.react('❌')
                            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                            lastnumber = 0
                            usernamelast = '@£%$£$^%$'
                        }
                        //end
                        }
                        else if (message.content.startsWith('6')) {
                            if (message.author.bot) return;
                            if (message.channel.id != channelIDconfig) return; 
                            //code to execute in-channel
                            let args = message.content.split(" ")
                            if (parseInt(message.content) == (lastnumber+1)) {
                                if (message.author.tag == usernamelast) {
                                    message.react('❌')
                                    message.channel.send('bruh, no double counting. anyways, starting at 0')
                                    lastnumber = 0
                                    usernamelast = '@£%$£$^%$'
                                    return;
                                } else {
                                message.react('✅')
                                lastnumber = (parseInt(message.content))
                                usernamelast = message.author.tag
                                countchannel.setTopic('Current number: '+lastnumber)
                                }
                            } else {
                                message.react('❌')
                                message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                lastnumber = 0
                                usernamelast = '@£%$£$^%$'
                            }
                            //end
                            }
                            else if (message.content.startsWith('7')) {
                                if (message.author.bot) return;
                                if (message.channel.id != channelIDconfig) return; 
                                //code to execute in-channel
                                let args = message.content.split(" ")
                                if (parseInt(message.content) == (lastnumber+1)) {
                                    if (message.author.tag == usernamelast) {
                                        message.react('❌')
                                        message.channel.send('bruh, no double counting. anyways, starting at 0')
                                        lastnumber = 0
                                        usernamelast = '@£%$£$^%$'
                                        return;
                                    } else {
                                    message.react('✅')
                                    lastnumber = (parseInt(message.content))
                                    usernamelast = message.author.tag
                                    countchannel.setTopic('Current number: '+lastnumber)
                                    }
                                } else {
                                    message.react('❌')
                                    message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                    lastnumber = 0
                                    usernamelast = '@£%$£$^%$'
                                }
                                //end
                                }
                                else if (message.content.startsWith('8')) {
                                    if (message.author.bot) return;
                                    if (message.channel.id != channelIDconfig) return; 
                                    //code to execute in-channel
                                    let args = message.content.split(" ")
                                    if (parseInt(message.content) == (lastnumber+1)) {
                                        if (message.author.tag == usernamelast) {
                                            message.react('❌')
                                            message.channel.send('bruh, no double counting. anyways, starting at 0')
                                            lastnumber = 0
                                            usernamelast = '@£%$£$^%$'
                                            return;
                                        } else {
                                        message.react('✅')
                                        lastnumber = (parseInt(message.content))
                                        usernamelast = message.author.tag
                                        countchannel.setTopic('Current number: '+lastnumber)
                                        }
                                    } else {
                                        message.react('❌')
                                        message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                        lastnumber = 0
                                        usernamelast = '@£%$£$^%$'
                                    }
                                    //end
                                    }
                                    else if (message.content.startsWith('9')) {
                                        if (message.author.bot) return;
                                        if (message.channel.id != channelIDconfig) return; 
                                        //code to execute in-channel
                                        let args = message.content.split(" ")
                                        if (parseInt(message.content) == (lastnumber+1)) {
                                            if (message.author.tag == usernamelast) {
                                                message.react('❌')
                                                message.channel.send('bruh, no double counting. anyways, starting at 0')
                                                lastnumber = 0
                                                usernamelast = '@£%$£$^%$'
                                                return;
                                            } else {
                                            message.react('✅')
                                            lastnumber = (parseInt(message.content))
                                            usernamelast = message.author.tag
                                            countchannel.setTopic('Current number: '+lastnumber)
                                            }
                                        } else {
                                            message.react('❌')
                                            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                            lastnumber = 0
                                            usernamelast = '@£%$£$^%$'
                                        }
                                        //end
                                        }
});

client.on('ready', () => {
    setInterval(() => {
        client.user.setActivity('Currently at '+lastnumber, { type: 'PLAYING' }); // sets to one of any in array
    }, 1000); // Runs this every 7 seconds.
    
});

client.on('ready', () => {
  PingServer()
});

function PingServer() { // Ping server every 10 seconds
  setInterval(function(){ client.guilds.cache.get('758016990567858187').channels.cache.get('816404028070035467').send('PING'); }, 20000);
}

client.login(bot_token)