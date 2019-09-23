const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "claim",
        description: "Makes a Staff Member claim a ticket",
        usage: " <ticket channel you want to claim>",
        category: "ticket related commands",
        accessableby: "Staff",
        aliases: ["c"]
    },
    run: async (bot, message, args) => {

      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`⭐| Your ticket is claimed By: ${message.author.username}.`)
      .setColor(gold)
      .setDescription("They will be assisting you shortly!");

      const channel = message.guild.channels.find(val => val.name === `ticket-${args[0]}`)

      if (!channel) return message.channel.send("You can't claim a Channel!");
      else {
        let logEmbed = new RichEmbed()
            .setColor(gold)
            .setTitle(`${message.guild.name} Ticket Logs`)
            .addField("User:", `${message.author}`)
            .addField("Action Type:", "Claiming a ticket.");

        let logchannel = message.guild.channels.find(c => c.name === "ticketlogs")
        logchannel.send(logEmbed)

      channel.send(claimEmbed)
      channel.setName(`claimed-${args[0]}`);
      }
    }
  }
