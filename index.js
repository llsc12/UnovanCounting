const Discord = require("discord.js"), fs = require("fs"), config = require("./config.json"); // Get all the requirements
const { bot_token, config_owner, prefix, ServerID, channelIDconfig} = require('./config.json')  // Get the config.json file into the main file
const client = new Discord.Client({ messageSweepInterval: 60, disableEveryone: true }) // Create a client
let lastnumber = 0
let usernamelast = '@£%$£$^%$'

client.on("ready", () => { // Logs response when started
    console.log('ready to count!')
    client.user.setPresence({status: "dnd"})
});
client.on('message', (message) => {
    if (message.content.includes('0')) {
    if (message.author.bot) return;
    if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
    if (message.channel.id != channelIDconfig) return; 
    //code to execute in-channel
    let args = message.content.split(" ")
    if (message.content.startsWith(prefix+'count')) {
        if (message.author.id != config_owner) return;
        lastnumber = parseInt(args[1])
        message.react('✅')
        message.delete({timeout: 2000})
        return; //made by llsc12
    } else if (parseInt(message.content) == (lastnumber+1)) {
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
        }
    } else {
        message.react('❌')
        message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
        lastnumber = 0
        usernamelast = '@£%$£$^%$'
    }
    //end
    }
    else if (message.content.includes('1')) {
        if (message.author.bot) return;
        if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
        if (message.channel.id != channelIDconfig) return; 
        //code to execute in-channel
        let args = message.content.split(" ")
        if (message.content.startsWith(prefix+'count')) {
            if (message.author.id != config_owner) return;
            lastnumber = parseInt(args[1])
            message.react('✅')
            message.delete({timeout: 2000})
            return; //made by llsc12
        } else if (parseInt(message.content) == (lastnumber+1)) {
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
            }
        } else {
            message.react('❌')
            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
            lastnumber = 0
            usernamelast = '@£%$£$^%$'
        }
        //end
        }
        else if (message.content.includes('1')) {
            if (message.author.bot) return;
            if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
            if (message.channel.id != channelIDconfig) return; 
            //code to execute in-channel
            let args = message.content.split(" ")
            if (message.content.startsWith(prefix+'count')) {
                if (message.author.id != config_owner) return;
                lastnumber = parseInt(args[1])
                message.react('✅')
                message.delete({timeout: 2000})
                return; //made by llsc12
            } else if (parseInt(message.content) == (lastnumber+1)) {
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
                }
            } else {
                message.react('❌')
                message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                lastnumber = 0
                usernamelast = '@£%$£$^%$'
            }
            //end
            }
            else if (message.content.includes('2')) {
                if (message.author.bot) return;
                if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                if (message.channel.id != channelIDconfig) return; 
                //code to execute in-channel
                let args = message.content.split(" ")
                if (message.content.startsWith(prefix+'count')) {
                    if (message.author.id != config_owner) return;
                    lastnumber = parseInt(args[1])
                    message.react('✅')
                    message.delete({timeout: 2000})
                    return; //made by llsc12
                } else if (parseInt(message.content) == (lastnumber+1)) {
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
                    }
                } else {
                    message.react('❌')
                    message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                    lastnumber = 0
                    usernamelast = '@£%$£$^%$'
                }
                //end
                }
                else if (message.content.includes('3')) {
                    if (message.author.bot) return;
                    if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                    if (message.channel.id != channelIDconfig) return; 
                    //code to execute in-channel
                    let args = message.content.split(" ")
                    if (message.content.startsWith(prefix+'count')) {
                        if (message.author.id != config_owner) return;
                        lastnumber = parseInt(args[1])
                        message.react('✅')
                        message.delete({timeout: 2000})
                        return; //made by llsc12
                    } else if (parseInt(message.content) == (lastnumber+1)) {
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
                        }
                    } else {
                        message.react('❌')
                        message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                        lastnumber = 0
                        usernamelast = '@£%$£$^%$'
                    }
                    //end
                    }
                    else if (message.content.includes('4')) {
                        if (message.author.bot) return;
                        if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                        if (message.channel.id != channelIDconfig) return; 
                        //code to execute in-channel
                        let args = message.content.split(" ")
                        if (message.content.startsWith(prefix+'count')) {
                            if (message.author.id != config_owner) return;
                            lastnumber = parseInt(args[1])
                            message.react('✅')
                            message.delete({timeout: 2000})
                            return; //made by llsc12
                        } else if (parseInt(message.content) == (lastnumber+1)) {
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
                            }
                        } else {
                            message.react('❌')
                            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                            lastnumber = 0
                            usernamelast = '@£%$£$^%$'
                        }
                        //end
                        }
                        else if (message.content.includes('5')) {
                            if (message.author.bot) return;
                            if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                            if (message.channel.id != channelIDconfig) return; 
                            //code to execute in-channel
                            let args = message.content.split(" ")
                            if (message.content.startsWith(prefix+'count')) {
                                if (message.author.id != config_owner) return;
                                lastnumber = parseInt(args[1])
                                message.react('✅')
                                message.delete({timeout: 2000})
                                return; //made by llsc12
                            } else if (parseInt(message.content) == (lastnumber+1)) {
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
                                }
                            } else {
                                message.react('❌')
                                message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                lastnumber = 0
                                usernamelast = '@£%$£$^%$'
                            }
                            //end
                            }
                            else if (message.content.includes('6')) {
                                if (message.author.bot) return;
                                if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                                if (message.channel.id != channelIDconfig) return; 
                                //code to execute in-channel
                                let args = message.content.split(" ")
                                if (message.content.startsWith(prefix+'count')) {
                                    if (message.author.id != config_owner) return;
                                    lastnumber = parseInt(args[1])
                                    message.react('✅')
                                    message.delete({timeout: 2000})
                                    return; //made by llsc12
                                } else if (parseInt(message.content) == (lastnumber+1)) {
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
                                    }
                                } else {
                                    message.react('❌')
                                    message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                    lastnumber = 0
                                    usernamelast = '@£%$£$^%$'
                                }
                                //end
                                }
                                else if (message.content.includes('7')) {
                                    if (message.author.bot) return;
                                    if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                                    if (message.channel.id != channelIDconfig) return; 
                                    //code to execute in-channel
                                    let args = message.content.split(" ")
                                    if (message.content.startsWith(prefix+'count')) {
                                        if (message.author.id != config_owner) return;
                                        lastnumber = parseInt(args[1])
                                        message.react('✅')
                                        message.delete({timeout: 2000})
                                        return; //made by llsc12
                                    } else if (parseInt(message.content) == (lastnumber+1)) {
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
                                        }
                                    } else {
                                        message.react('❌')
                                        message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                        lastnumber = 0
                                        usernamelast = '@£%$£$^%$'
                                    }
                                    //end
                                    }
                                    else if (message.content.includes('8')) {
                                        if (message.author.bot) return;
                                        if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                                        if (message.channel.id != channelIDconfig) return; 
                                        //code to execute in-channel
                                        let args = message.content.split(" ")
                                        if (message.content.startsWith(prefix+'count')) {
                                            if (message.author.id != config_owner) return;
                                            lastnumber = parseInt(args[1])
                                            message.react('✅')
                                            message.delete({timeout: 2000})
                                            return; //made by llsc12
                                        } else if (parseInt(message.content) == (lastnumber+1)) {
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
                                            }
                                        } else {
                                            message.react('❌')
                                            message.channel.send('bruh, you\'re literally counting, how\'d ya fuck up? anyways, starting at 0')
                                            lastnumber = 0
                                            usernamelast = '@£%$£$^%$'
                                        }
                                        //end
                                        }
                                        else if (message.content.includes('9')) {
                                            if (message.author.bot) return;
                                            if (message.content.includes('<@!806912330088054857>')) return message.channel.send('don\'t ping me again, i\'m on dnd')
                                            if (message.channel.id != channelIDconfig) return; 
                                            //code to execute in-channel
                                            let args = message.content.split(" ")
                                            if (message.content.startsWith(prefix+'count')) {
                                                if (message.author.id != config_owner) return;
                                                lastnumber = parseInt(args[1])
                                                message.react('✅')
                                                message.delete({timeout: 2000})
                                                return; //made by llsc12
                                            } else if (parseInt(message.content) == (lastnumber+1)) {
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

client.login(bot_token)