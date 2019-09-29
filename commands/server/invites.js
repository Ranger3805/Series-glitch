const Discord = require('discord.js'), 
      arraySort = require('array-sort');
const { gold } = require("../../colours.json")


module.exports = {
  config: {
    name: "invites",
    noaliases: "No Aliases",
    aliases: [],
    usage:"",
    category: "server",
    setup: "",
    descrption: "Sends a report of invite of a member in the server.",
    accessableby: "Members"
  },

  run: async (bot, message, args) => {

    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`**${++index}**.  **${invites.inviter.tag}** 》 \`${invites.uses}\` **invites**`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`🏆 INVITE LEADERBOARD 🏆`)
        .setColor(gold)
        .setDescription(`${possibleinvites.join('\n')}`)
        .setTimestamp()
    message.channel.send(embed);
}
}