const Discord = require("discord.js"), fs = require("fs"), si = require('systeminformation'), nodeOS = require('os'); // Get all the requirements
const { bot_token, config_owner, prefix, channelIDconfig} = require('./config.json')  // Get the config.json file into the main file
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
    if (!message.guild || message.author.bot) return;
    if (message.content.startsWith(prefix)) {

    // Le command handler :)
    let args = message.content.split(prefix)[1].split(" ");
    let command = args.shift().toLowerCase();
    if (command == 'status' || command == 'stat' || command == 'stats' || command == 'info') {
            if (args[0] != `<!${client.user.id}>`) return;
            si.cpu()
            .then(cpu => {
                si.mem()
                .then(mem => {
                si.osInfo()
                .then(os => {
                    si.cpuTemperature()
                    .then(temp => {
                        si.currentLoad()
                        .then(load => {
                            console.log(nodeOS)
                            let totalSeconds = (client.uptime / 1000);
                            let uptime = convToDays(totalSeconds);
                            let embed = new Discord.MessageEmbed()
                                .setColor("RANDOM")
                                .setTitle(`System & Process Information for ${client.user.username}`)
                                .setURL('https://discord.gg/YHnyVmKQwc')
                                .setTimestamp()
                                .setFooter('Requested by '+message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                                .addField('Process Information', `**Uptime** \n${uptime} \n**Serving** \n${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members \n**Running** \n${process.release.name} ${process.version}`)
                                .addField(`System Information`,`**Device Hostname** \n${os.hostname} \n**CPU** \n${cpu.cores} Core ${cpu.manufacturer} ${cpu.brand}@${cpu.speed}GHz ${process.config.variables.host_arch} \n**General CPU Load** \n${load.avgLoad}% \nCurrently ${temp.main}°c \n**Device Uptime** \n${convToDays(nodeOS.uptime())} \n**Memory** \nTotal Memory: ${(mem.total/1000000000).toFixed(2)}GB \nUsed Memory: ${(mem.used/1000000000).toFixed(2)}GB \nFree Memory: ${(mem.free/1000000000).toFixed(2)}GB \n**Operating System** \n${os.distro} ${os.release} ${os.arch}`)
                            message.channel.send(embed)
                            })
                        })
                    })
                })
            })
        }
    }
});

function convToDays(totalSeconds) {
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let daysText = (days == 1 ? "day" : "days");
    let hoursText = (hours == 1 ? "hour" : "hours");
    let minutesText = (minutes == 1 ? "minute" : "minutes");
    let daysFinal = (days >= 1 ? days + " " + daysText + ", " : "");
    let hoursFinal = (hours >= 1 ? hours + " " + hoursText + ", " : "");
    let minutesFinal = (minutes >= 1 ? minutes + " " + minutesText + " and " : "");
    let finished = `${daysFinal}${hoursFinal}${minutesFinal}${seconds} seconds`;
    return finished;
}

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
  if (!client.user.username.includes('Unovan')) return;
  PingServer()
});

function PingServer() { // Ping server every 10 seconds
  setInterval(function(){ client.guilds.cache.get('758016990567858187').channels.cache.get('816404028070035467').send('PING'); }, 20000);
}

client.login(bot_token)