var express = require('express');
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const { Client, Collection } = require("discord.js");
const{ discord } = require("discord.js");
const { RichEmbed } = require("discord.js");
const {token} = require("./botconfig.json");
const bot = new Client();
const moment = require("moment");
const fs = require("fs");
const {prefix} = require("./botconfig.json");

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.on('ready', () => {
    bot.guilds.map((guild) => console.log(`Name: ${guild.name} (ID: ${guild.id}) (Owner: ${guild.owner}) (Member Count: ${guild.memberCount})` ));
});

bot.on('message', message => {
  if (message.channel.id === "615584109011402781") {
    message.react(':yes:625682407722450947')
      .then(() => {
        message.react(':no:625682483517587456')
      });
  }
});

const serverStats = {
	guildID: '614904662575022083',
	totalUserID: '621922381937508381',
	memberCountID: '621922465773256741',
	botCountID:'621922556743647242'
}
bot.on('guildMemberAdd', member => {
	if(member.guild.id !== serverStats.guildID) return;
	bot.channels.get(serverStats.totalUserID).setName(`Total Users: ${member.guild.memberCount}`);
	bot.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
	bot.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
  
   let userLogs = member.guild.channels.find(c => c.name === '📜》servergates');

    // anthony#8577
userLogs.send(`<:memberjoin:623491001662832641> User joined! \n **${member.user.tag}** (\`${member.user.id}\`) has joined!`);

} );
bot.on('guildMemberRemove', member => {
	if(member.guild.id !== serverStats.guildID) return;	
	bot.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`);
	bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
	bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);	
  
  
      let userLogs = member.guild.channels.find(c => c.name === '📜》servergates');

    // anthony#8577
userLogs.send(`<:memberleave:623491013859606558> User left! \n  **${member.user.tag}** (\`${member.user.id}\`)has left!`);
  
} );
bot.on('guildCreate', (guild) => {

   
       let channel = bot.channels.get(guild.channels.filter(c => c.permissionsFor(bot.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0]) 
        
       channel.send(`Thank you for inviting Series! We are happy to serve your server with all our will and possiblities! Commands list: \`!help\` \n Need help with the bot? Join our server: https://discord.gg/wen9SQC `)

});




bot.login(token);