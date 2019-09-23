const { Client, Collection } = require("discord.js");
const{ discord } = require("discord.js");
const { RichEmbed } = require("discord.js");
const {token} = require("./botconfig.json");
const bot = new Client();

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
} );
bot.on('guildMemberRemove', member => {
	if(member.guild.id !== serverStats.guildID) return;	
	bot.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`);
	bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
	bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);	
} );


const botStats = {
	guildID: '614904662575022083',
	totalUserID: '625550000746790923',
	memberCountID: '625550080178389022',
	botCountID:'625550363356823564'
}
bot.on('guildCreate', guild => {
	if(guild.id !== botStats.guildID) return;
	bot.channels.get(botStats.totalUserID).setName(`Total Users: ${bot.users.size}`);
	bot.channels.get(botStats.memberCountID).setName(`Total Servers: ${bot.guilds.size}`);
	bot.channels.get(botStats.botCountID).setName(`Command Count:`);	
} );
  



bot.login(token);