




// some notes here for the users hosting this
// you can edit the prefix, version, token, statustype, adminrole, and color for embeds in settings.json
// you will need a bot token to log in, im not sharing Saturnly's token. 
// This code is used for Saturnly (view current version of this in settings.json) made by SaturnDev#3797

// anyone first doing this; you need to edit this in Microsoft Visual Studio Code (NOT VISUAL STUDIO) in order to edit & save the code

// If you use this code without crediting I WILL KNOW ITS THE SATURNLY CODE AND WILL CALL YOU OUT
// also dm me if you use this xd

// @SaturnDev#3797

// Begin Code

const Discord = require('discord.js');       // mandatory
const client = new Discord.Client();        // mandatory
const bot = new Discord.Client();        // mandatory, same thing as const client
console.log(`Startup on client initiated`)

const MessageEmbed = new Discord.MessageEmbed        // just here for safety purposes, dont remove
const admin = '810312709429788732'
const {ver, statustype, token, hexSat, prefix} = require(`./settings`)    // get settings from settings.json
const status = `${ver}`      // user status message

const version = `Saturnly Version ${ver}` // no touchy, you can edit the version in settings.json



const ms = require('ms');    // used for ping and uptime
const fs = require('fs');    

const { codePointAt } = require('ffmpeg-static');    // dont remove

client.on('message', message=>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

    const args = message.content.slice(prefix.length).split(/ +/);    // args system, this is important dont delete
    const command = args.shift().toLowerCase();       // shifts the command to lowercase!!
    
  
    if(command === 'kick'){      // begin adding commands
        if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send("You need administrator permission to run this command!");
   
        if(message.member.roles.cache.has(admin)){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('🎉 User Kicked')
            .setColor(hexSat)
            .addFields(
                {name: 'User Kicked', value: `${memberTarget}`},
                {name: 'Kicked By', value: `${message.author}`},
                {name: 'Reason of Kick', value: 'Unspecified (coming soon)'},
                
            )
            .setFooter(version));
        } else{
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('❌ Failure to Kick')
            .setDescription('Specify a user to kick!')
            .setColor(hexSat)
            
            
            .setFooter(version));
            
        }
    } else message.reply('You do not have permissions to run this command')

    } else if(command === 'yourmom'){
        message.reply('I love you sweetie')
       

    } else if(command === 'cmds'){
        
        
       message.author.send(new Discord.MessageEmbed()
        .setColor(hexSat)
        .setTitle('Saturnly Commands - User')
        .setDescription('Here are the commands availible:')
        .setImage('https://i.ibb.co/ssJSc8q/cmds.png')
        .addFields(
            {name: '.help', value: 'General information about the bot'},
            {name: '.yourmom', value: '??'},
            {name: '.sad', value: 'Explains itself'},
            {name: '.amicool', value: 'Are you cool? Run this and figure out'},
            {name: '.itsrewindtime', value: 'Will Smith is cool'},
            {name: '.coinflip', value: 'Flips a coin, get either heads or tails'},
            {name: '.randomnumber', value: 'Picks a random number between 0 and 100'},
            {name: '.credits', value: 'Meet the Developers of Saturnly!'},
            {name: '.insultly', value: 'Make the bot insult itself'},
            {name: '.aretheysus (@user)', value: 'See if they are sus'},
            {name: '.aretheyimpos (@user)', value: 'See if they are the imposter'},
            {name: '.asksaturnly', value: 'Ask the bot a question!'},
            {name: '.invite',value: 'Invite the bot to your own server!'},
            {name: '.invitely', value: 'Invite command but it isnt a bit.ly link'},
            {name: '.kill (@user)', value: 'Your the imposter, do some action!'},
            {name: '.taskprogression', value: 'See the percentage of how many tasks the crewmates have done'},
            {name: '.issussauce', value: 'Is sus sauce or is sauce sus?'},
            {name: '.version', value: 'See what version Saturnly is running'},
            {name: '.ping', value: 'Ping & uptime regarding the bot'},
            {name: '.uptime', value: 'Bot uptime'},
            {name: '.saturnlyjobs', value: 'Apply for a job at Saturnly!'}


        )
        .setFooter(version));
        
       message.react('📬')
    } else if(command === 'sad'){
        
        message.reply('sucks man')
        

    } else if(command === 'help'){
        
        message.author.send(new Discord.MessageEmbed()
        .setColor(hexSat)
        .setTitle('Help')
        .setDescription('Here is some things you might need help with:')
        .setImage('https://i.ibb.co/w6dxyhf/help.png')
        .addFields(
            {name: 'Support Server', value: 'https://discord.gg/wbP7YY5fXF'},
            {name: 'What commands may I run?', value: 'Run the command **.cmds**'},
            {name: 'Work or Parter with Saturnly', value: 'Join the support server, and find the Parters and Jobs channel!'},
            {name: 'Report a Bug', value: 'Join the Support Server and locate the Reporting channel!'},
            {name: 'How do I know when Saturnly is down?', value: 'Join the Support Server, at the top there is a Status area.'},
            {name: 'Invite Saturnly ', value: 'Run **.invite**'},
            {name: 'Saturnly Developers (credits / dev team)', value: 'Run **.credits**'}
        )
        .setFooter(version));
        
        message.react('📬')

    } else if(command === 'mute'){
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send("You need manage messages permission to run this command!");
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Community');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Auto-Mute');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
            
        } 
   
        
    } else if(command === 'unmute'){
        if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send("You need manage messages permission to run this command!");
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Community');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Auto-Mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            
        } else{
            message.channel.send('Cant find that member!');
            
        }
    
    } else if(command === 'itsrewindtime'){
        message.channel.send('https://thumbs.gfycat.com/ColdDishonestBull-size_restricted.gif')
        
    } else if(command === 'amicool'){
        if(message.author.id === '717487557910331410'){
            message.reply('King, why would you *question* that you are cool? Your the king! The best king! You are cooler than cool!')

        } else{
        const rando = Math.floor(Math.random() * 4);
        if(rando==1){
            message.reply('Your not cool')
            

        } else{
            message.reply('You are cool')
            
        }
    }
    } else if(command === 'coinflip'){
        const rando2 = Math.floor(Math.random() * 2);
 
        if(rando2==1){
            message.channel.send('Heads!')
            
        } else{
            message.channel.send('Tails!')
            
        }
    } else if(command === 'randomnumber'){
        const rand = Math.floor(Math.random()* 101)
        message.reply(rand)
        
    } else if(command === 'ezwin'){
        message.reply('There was an error running the command')
    } else if(command === 'version'){
        message.reply(version)
    } else if(command === 'insultly'){
        const rando = Math.floor(Math.random() * 4);
        if(rando==0){
            message.channel.send('I, Saturnly, Come to admit that I pretty much am utter garbage')
        } else if(rando==1){
            message.channel.send('I am so fat my thighs need license plates')
        } else if(rando==2){
            message.channel.send('Imagine being a discord bot')
        } else if(rando==3){
            message.channel.send('Mee6 is better than me tbh')
        } else if(rando==4){
            message.channel.send('Im imposter vote me out')
        } else{
            message.channel.send('im so bad i actually had an error sending an insult')
        // benny is sussy
          console.log('failed to insult saturnly :(')
        } 
    } else if(command === 'credits'){
        message.channel.send(new Discord.MessageEmbed()
        .setColor(hexSat)
        .setTitle('The Saturnly Team')
        .setDescription('Meet the Developer Team behind Saturnly! All of these people are in our Support Server.')
        .setImage('https://i.ibb.co/TYxvknZ/devv.png')
        .addFields(
            {name: '<@368857464507990027>', value: 'Lead Developer'}, // me
            {name: '<@576809010989105172>', value: 'Developer, Logos, Basics, Custom Commands'}, // dust
            {name: '<@717487557910331410> (the almighty king)', value: 'Custom Commands, Support Server Moderator'}, // ray
            {name: '<@754452773587648533>', value: 'Custom Commands, Keeping Us Alive, Support Server Moderator'}, // eraly
            {name: '<@419559122997084173>', value: 'Support Server Moderator'}, // benny boy
            {name: '<@322098789085347851>', value: 'Custom Commands'}, // jollybb8 evan
            

        )
        .setFooter(version));
        
    } else if(command === 'aretheyimpos'){
        const target = message.mentions.users.first();
        const rand = Math.floor(Math.random() * 3);
        if(rand==1){
            let memberTarget= message.guild.members.cache.get(target.id);
            message.channel.send(`<@${memberTarget.user.id}> is the imposter`)
            message.channel.send('1 imposter remains')
        } else if(rand==2){
            let memberTarget= message.guild.members.cache.get(target.id);
            message.channel.send(`<@${memberTarget.user.id}> is not the imposter`)
            message.channel.send('2 imposters remain')
        } else if(rand==0){
        let memberTarget= message.guild.members.cache.get(target.id);
        message.channel.send(`<@${memberTarget.user.id}> is not the imposter`)
        message.channel.send('2 imposters remain')
     
    } else message.reply('State who you think is imposter')
    
} else if(command === 'aretheysus'){
    
    const target = message.mentions.users.first();
    const rand = Math.floor(Math.random() * 3);
    let memberTarget= message.guild.members.cache.get(target.id);


    if(rand==1){
        
        message.channel.send(`<@${memberTarget.user.id}> looked like they faked card swipe but im not exactly sure thats true. They are slightly sus`)
        
    } else if(rand==2){
        
        message.channel.send(`<@${memberTarget.user.id}> is not sus at all. They seem to be a legit crewmate. `)
        
    } else if(rand==0){
    
    message.channel.send(`<@${memberTarget.user.id}> looked to be as if they faked several tasks, was seen standing on a vent and following around people. They are very sus`)
    

    } else if(rand==3){
        message.channel.send(`<@${memberTarget.user.id}> was seen standing on a few vents and followed around one person but was standing near a task and progress went up and they walked away. They dont seem very sus`)
    } 
} else if(command === 'issussauce'){
    const rand = Math.floor(Math.random() * 2);
    if(rand==1){
        message.reply('Yes, sus is sauce')
    } else message.reply('No, sus isnt sauce')
} else if(command === 'invite'){
    message.channel.send(new Discord.MessageEmbed()
    .setColor(hexSat)
    .setTitle('Invite Saturnly')
    .setDescription('Invite Saturnly to your Discord Server!')
    .setImage('https://i.ibb.co/KrfzRJ7/invitw.png')
    .addFields(
        {name: 'Invite', value: 'https://bit.ly/3dDNLXy'},
        {name: 'Suport Server', value: 'https://discord.gg/wbP7YY5fXF'},
        {name: 'Not Bit.ly Link', value: 'Run .invitely'},
        {name: 'Sidenote / Warning', value: 'Moderator commands are not availible yet! You can run .cmds (in your own server) to see what is availible'}
    )
    .setFooter(version));
} else if(command === 'asksaturnly'){
    const rand = Math.floor(Math.random() * 4);
    if(rand==1){
        message.reply('Yes')
    } else if(rand==2){
        message.reply('Possibly')
    } else if(rand==3){
        message.reply('Maybe, maybe not')
    } else if (rand==4){
        message.reply('In another dimension, yes')
    } else if(rand==5){
        message.reply('In another dimension, no')
    } else if(rand==0){
        message.reply('Nope')
    } else message.reply('I dont know')
} else if(command === 'taskprogression'){
    const rand = Math.floor(Math.random() * 101);
    message.reply(`${rand}%`)

} else if(command === 'kill'){
    const target = message.mentions.users.first();
    const r = Math.floor(Math.random() * 4);
    let memberTarget= message.guild.members.cache.get(target.id);

    if(r==1){
        message.channel.send(`<@${memberTarget.user.id}> went up in flames`)
    } else if(r==2){
        message.channel.send(`The imposter killed <@${memberTarget.user.id}>`)
    } else if(r==3){
        message.channel.send(`The imposter decapitated <@${memberTarget.user.id}>`)
    } else if(r==4){
        message.channel.send(`<@${memberTarget.user.id}> turned into a ghost`)
    }
} else if(command === 'serverinfo'){
    const { guild } = message
    const { name, region, memberCount, description, verificationLevel, ownerID } = guild

    message.channel.send(new Discord.MessageEmbed()
    .setColor(hexSat)
    .setTitle('Server Information')
    .setDescription('')
    .addFields(
        {name: 'Server Owner', value: `<@${ownerID}>`},
        {name: 'Server Name', value: `${name}`},
        {name: 'Server Region', value: `${region}`},
        {name: 'Server Description', value: `${description}`},
        {name: 'Member Count', value: `${memberCount}`},
        {name: 'Verification Level', value: `${verificationLevel}`},
        

    )
    .setFooter(version));

} else if(command === 'invitely'){
    message.reply('https://discord.com/oauth2/authorize?client_id=810318983823491072&permissions=8&scope=bot')
} else if (command == "play"){
    message.reply('Saturnly Audio Prefix is now **sat!**')

} else if (["repeat", "loop"].includes(command)) {
    message.reply('Saturnly Audio Prefix is now **sat!**')
} else if (command == "stop") {
    message.reply('Saturnly Audio Prefix is now **sat!**')
} else if (command == "skip"){
    message.reply('Saturnly Audio Prefix is now **sat!**')
} else if (command == "queue") {
    message.reply('Saturnly Audio Prefix is now **sat!**')
} else if (command === 'saturnlyrulezylelyy'){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Discord TOS & Age')
    .setDescription('You agree to Discord\'s Terms of Service\n **And that you are or over the age of 13**')
    .setFooter('Rule 1')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Racism / Homophobia')
    .setDescription('These are prohibited because everybody is welcome here at Saturn Developments')
    .setFooter('Rule 2')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Triple S: Swears, Spams & Scams')
    .setDescription('Spamming and Scamming are prohibited, and you should know why. \nSwearing is allowed, just keep it to a minimum')
    .setFooter('Rule 3')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Permitted File Upload Types')
    .setDescription('These are the file types you are allowed to send in this server\n.mp3 .mp4 .mov .pdf .png .jpeg .jpg')
    .setFooter('Rule 4')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Impersonation')
    .setDescription('Impersonating a bot, staff member, or really anyone is **not allowed at all*. This will lead to a instant ban with no warning')
    .setFooter('Rule 5')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Moderators')
    .setDescription('The word of what a moderator states is FINAL unless new order given by a ownership team member')
    .setFooter('Rule 6')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Saturn Developments Rules')
    .setDescription('')
    .setImage('https://i.ibb.co/3BLznj0/ssrules.png')
    .setFooter('Rules last updated on 3/31/2021')
    .setColor(hexSat)
    )
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Reporting Rulebreakers')
    .setDescription('Would you like to report a rule violation from a user?\nVisit our <#818653348471242813> channel!\n (help and support channel if it doesnt load)')
    .setFooter(version)
    .setColor(hexSat)
    )
    
    
   

} else if(command === 'supportserver'){
    message.reply('Run **.help**, and the first link goes to the Support Server')
} else if(command === 'ping'){
    message.reply(new Discord.MessageEmbed()
    .setTitle('Saturnly Ping')
    .setDescription('Please Wait, Calculating...')
    .setColor(hexSat)
    ).then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp

        resultMessage.edit(new Discord.MessageEmbed()
        .setTitle('Saturnly Ping')
        .setDescription('Bot ping based on response time from command')
        .setColor(hexSat)
        .addFields(
            {name: 'Discord API Latency', value: `${ping} milliseconds`},
            {name: 'Bot Latency', value: `${client.ws.ping} milliseconds`},
            {name: 'Bot Uptime', value: `${ms(client.uptime, { long: true })}`},
        )
        .setFooter(version)
        
        )
    })
} else if(command === 'uptime'){
    message.reply(new Discord.MessageEmbed()
    .setTitle('Bot Uptime')
    .setDescription(`${ms(client.uptime, { long: true })}`)
    .setColor(hexSat)
    .setFooter(version)
    )
} else if(command === 'devpanel'){
    const clientCallToProtocol = Math.floor(Math.random() * 1000000001)
    if(message.author.id=='368857464507990027'){
        message.channel.send('You have successfully gained access to the DevPanel! Check your DMs!')
        console.log(`DevPanel accessed by ${message.author.tag}`)
        const saturndev =  message.author
        saturndev.send(new Discord.MessageEmbed()
        .setTitle('Developers Panel')
        .setColor('RANDOM')
        .setDescription('DevPanel')
        .addFields(
            {name: 'Node Version', value: 'v14.15.5'},
            {name: 'Saturnly_MathFramework.dll Status', value: 'c-9ja243nn1b3_z'},
            {name: 'Version Build Stance', value: 'version.js.exe'},
            {name: 'All Registered Mandatory Dependencies', value: 'Saturnly_ArgsFramework.dll, Saturnly_MathFramework.dll, Saturnly_DiscordApiForce.dll'},
            {name: 'All Registered Optional Dependencies', value: 'users-bias.dll, console_err_storage.txt, vscode-editor-permit.exe, vscode-editor-permit.dll, session-command-logs.txt'},
            {name: 'Client CallTo Protocol Number (session based)', value: clientCallToProtocol},
        )
        )
    } else message.reply('This command is only for Saturnly Staff & Developers. (any current staff please DM SaturnDev about this)')

} else if(command === 'website'){
    message.reply('http://saturnly.tk')
} else if(command === 'saturnlytk'){
    message.reply('http://saturnly.tk')
} else if(command === 'site'){
    message.reply('http://saturnly.tk')
} else if(command === 'dm') {
    
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send("You need manage messages permission to run this command!");
  let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!user)
    return message.channel.send(
      `You did not mention a user, or you gave an invalid id`
    );
  if (!args.slice(1).join(" "))
    return message.channel.send("You did not specify your message");
  user.user
    .send(args.slice(1).join(" "))
    .catch(() => message.channel.send("That user could not be DMed!"))
    .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
} else if(command === 'slowmode'){
    if(!message.member.permissions.has("ADMINISTRATOR")){
        message.reply('You need administrator permissions to run this command!')

    }
    if (!args[0])
    return message.channel.send(
      `You did not specify the time in seconds you wish to set this channel's slow mode to!`
    );
  if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
  let reason = message.content.slice(
    1 + 9 + args[0] + 1
  );
  if (!reason) {
    reason == "No reason provided!";
  }
  message.channel.setRateLimitPerUser(args[0], reason);
  message.channel.send(
    `Set the slowmode of this channel to **${args[0]}** with the reason: **${reason}**`
  );
} else if(command === '8ball'){
    let question = message.content.slice(1 + 6);
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
      ];
      let response =
        responses[Math.floor(Math.random() * 5 - 1)];
      let Embed = new Discord.MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question}\nThe 8ball\'s spoketh: ${response}`)
        .setColor(hexSat)
        .setFooter(version)
      message.channel.send(Embed);
    }
  
} else if(command === 'oldest') {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => a.user.createdAt - b.user.createdAt)
      .first();
    const Embed = new Discord.MessageEmbed()
      .setTitle(`The oldest member in ${message.guild.name}`)
      .setColor(hexSat)
      .setFooter(version)
      .setDescription(
        `${mem.user.tag} is the oldest user in ${
          message.guild.name
        }!`
      );
    message.channel.send(Embed);
  } else if(command === 'youngest'){
    let mem = message.guild.members.cache
    .filter((m) => !m.user.bot)
    .sort((a, b) => b.user.createdAt - a.user.createdAt)
    .first();
  const Embed = new Discord.MessageEmbed()
    .setTitle(`The youngest member in ${message.guild.name}`)
    .setColor(hexSat)
    .setFooter(version)
    .setDescription(
      `${mem.user.tag} is the youngest user in ${
        message.guild.name
      }!`
    );
  message.channel.send(Embed);
  } else if(command === 'botmanagment'){
    if(message.guild.name == 'Saturnly'){
        if(message.author.id == '368857464507990027'){
            new Discord.MessageEmbed()
            .setColor(hexSat)
            .setFooter(version)
            .setTitle('Saturnly Managment')
            .setDescription('Kill the current bot session: Run **.killsession** \nOperators Version: v3.2.9b')
        } else message.reply('You do not have permission to do this!')
    } else message.reply('You need to be in the Saturnly Support Server to do this! Find the invite in the **.help** command!')
} else if(command === '.'){
} else if(command === '..'){
} else if(command === '...'){
} else if(command === '....'){
} else if(command === 'say'){
    let MSG = "";
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();
} else if(command === 'createpoll'){
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(
      `You do not have admininistrator privilages, ${message.author.username}`
    );

  let question = message.content
    .split(`${bot.prefix}createpoll`)
    .join("");
  if (!question)
    return message.channel.send(`You did not specify your question!`);
   const emmbedd = new Discord.MessageEmbed()
    .setTitle(`New poll!`)
    .setDescription(`${question}`)
    .setFooter(`${version} | Poll created by ${message.author.username}`)
    .setColor(hexSat);

    const mssg = message.channel.send(emmbedd);
    mssg.react('👍');
    mssg.react('👎');
} else if(command === 'saturnlyjobs'){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Work at Saturnly')
    .setDescription('Availible Positions: Testing Team, Moderation Team, Support Team\nWe recommend being in the Support Server for higher acceptance chance\nApply here with this link: https://forms.gle/xR3FLwscL5mo2awo8')
    .setColor(hexSat)
    .setFooter(version)
    )
} else if(command === 'gen'){
    if(message.guild.name === 'Saturn Developments'){
        if(message.member.roles.cache.has(admin)){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('This isn\'t where you put your questions!')
        .setImage('https://media.discordapp.net/attachments/813289308760834058/816012173205438574/sadasdad.png')
        .setColor(hexSat)
        .setFooter(version)            
        )
        message.delete()
        } else{
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('❌ Permission Denied ❌')
            .setDescription('You are not a Saturnly Support Team member! \n You do not have permission to use the command. \n \n You can apply for Support Team by running **.saturnlyjobs**')
            .setFooter(version)
            .setColor(hexSat)
            )
        }
    }
} else if(command === 'usercommands'){
    if(message.guild.name === 'Saturn Developments'){
        if(message.member.roles.cache.has(admin)){
            message.channel.send('To get started, run **.help** to see my commands, invite me, or link to the Support Server (your already in it!)')
            message.delete()
        } else{
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('❌ Permission Denied ❌')
            .setDescription('You are not a Saturnly Support Team member! \n You do not have permission to use the command. \n \n You can apply for Support Team by running **.saturnlyjobs**')
            .setFooter(version)
            .setColor(hexSat)
            )
        }
    }
} else if(command === 'wcrelease'){
    if(message.guild.name === 'Saturn Developments'){
        if(message.member.roles.cache.has(admin)){
            message.channel.send('War Cry will be publicly released in October of 2022! You can buy the early access gamepass to play 2 months before release!')
            message.delete()
        } else {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('❌ Permission Denied ❌')
            .setDescription('You are not a Saturnly Support Team member! \n You do not have permission to use the command. \n \n You can apply for Support Team by running **.saturnlyjobs**')
            .setFooter(version)
            .setColor(hexSat)
            )
        }
    }
} else if(command === 'wcpreview'){
    if(message.guild.name === 'Saturn Developments'){
        if(message.member.roles.cache.has(admin)){
            message.channel.send('https://www.roblox.com/games/6521162597/War-Cry-Preview')
            message.delete()
        } else {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('❌ Permission Denied ❌')
            .setDescription('You are not a Saturnly Support Team member! \n You do not have permission to use the command. \n \n You can apply for Support Team by running **.saturnlyjobs**')
            .setFooter(version)
            .setColor(hexSat)
            )
        }
    }
} else if(command === 'suggest'){
    if(message.guild.name === 'Saturn Developments'){
        if(message.channel.id === '828102923535777792'){
    let question = message.content.slice(1 + 7);
    if (!question)
    return message.reply(`You did not specify your suggestion!`);

    message.guild.channels.cache.get('828103571107086366').send(new Discord.MessageEmbed()
    .setColor(hexSat)
    .setTitle('Suggestion')
    .setDescription(`Submitted by ${message.author.tag} \n \n Suggestion: \n${question}`)
    .setFooter(`Submitted on millisecond number ${message.createdTimestamp}`)
    )
    message.author.send(`Submitted suggestion for Saturnly successfully! \n \n The suggestion was: \n ${question}`)
    message.delete()
        } else{
            message.channel.send(new Discord.MessageEmbed()
            .setColor(hexSat)
            .setTitle('❌ Error Making Suggestion ❌')
            .setDescription('You need to run the command inside of <#828102923535777792> to make a suggestion!')
            .setFooter(version)
            )
        }
    } else {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(hexSat)
        .setTitle('❌ Error Making Suggestion ❌')
        .setDescription('You need to be in the support server to do this! \n Join the support server by running **.help**')
        .setFooter(version)
        )}
} else if(command === 'announce'){
    if(message.author.id === '368857464507990027'){
    let question = message.content.slice(1 + 8);
    if (!question)
    return message.reply(`You did not specify your suggestion!`);

    message.guild.channels.cache.get('810396603021131786').send(new Discord.MessageEmbed()
    .setColor(hexSat)
    .setTitle('Annoucement')
    .setDescription(`Made by ${message.author.tag} \n \n Annoucement: \n${question}`)
    .setFooter(`Submitted on millisecond number ${message.createdTimestamp}`)
    )
    message.guild.channels.cache.get('810396603021131786').send('@everyone')
    } else {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(hexSat)
        .setTitle('❌ Error Sending Annoucement ❌')
        .setDescription('You do not have permission to make an annoucement!')
        .setFooter(version)
        )

    }
} else {
    message.channel.send(new Discord.MessageEmbed()
    .setColor(hexSat)
    .setTitle('❌ Invalid Command ❌')
    .setDescription('That is not a valid command! \nYou can view all valid commands by running **.help**')
    .setFooter(version)
    )
}

// let invitelinkkkk = message.channel.createInvite(maxAge = 86400, maxUses = 1, temporary = false, reason = 'for error exports so devs can help with issues in your server')    
const cmdExport = `${message.author.tag} has ran "${message}" of channel "${message.channel.name}"`
console.log(cmdExport)
    
    
});

client.on('guildMemberAdd', member => {
    if(member.guild.name == 'Saturn Developments'){
    let channelchat = message.guild.channels.cache.get(810312710989283361)
    channelchat.send('User @' + member.user.tag + ' has joined the server!')

    var role = member.guild.roles.cache.find(role => role.name == "Community")
    member.roles.add(role);
    console.log('User @' + member.user.tag + ' has Saturn Developments');
    }
});


// Status
client.on('ready', () => {
    client.user.setActivity(`${ver}`, {
        type:"STREAMING",
        url: "https://www.twitch.tv/saturnxoffical"
    });

    console.log(`Bot ${ver} started successfully on ${client.user.tag}`)
    console.log(`Status: "${status}" on type "${statustype}"`)
});

// Log in to token (KEEP AT BOTTOM)
client.login(token);   // you can get the token from settings.json (use your own)