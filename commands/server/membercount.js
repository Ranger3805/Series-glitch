const { discord } = require("discord.js")
const { gold } = require("../../colours.json")
const { RichEmbed } = require("discord.js");


module.exports = {
  config: {
    name: "membercount",
    noaliases: "No Aliases",
    aliases: [],
    usage:"",
    category: "server",
    setup: "",
    descrption: "Sends a report of all members in the server.",
    accessableby: "Members"
  },

  run: async (bot, message, args) => {
    const embed = new RichEmbed()
        .setTitle(`${message.guild.name}'s Member Count`)
        .setColor(gold)
        .addField('Members', `**${message.guild.memberCount}**`, true)
        .addBlankField(true)
        .addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
        .addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
        .addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
        .setFooter(`Owner: ${message.guild.owner.user.tag}`)
    message.channel.send(embed);
  }
}
