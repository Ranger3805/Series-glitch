const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "unclaim",
        description: "Makes a Staff Member unclaim a ticket",
        usage: "!unclaim <ticket channel you want to unclaim ",
        category: "ticket related commands",
        accessableby: "Staff",
        aliases: ["unc"]
    },
    run: async (bot, message, args) => {

      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`Your ticket is set unclaimed By: ${message.author.username}.`)
      .setColor(gold)
      .setDescription("A new staff member will be helping you soon!");

      const channel = message.guild.channels.find(val => val.name === `claimed-${args[0]}`)

      if (!channel) return message.channel.send("You can't unclaim a Channel!");
      else {
        let logEmbed = new RichEmbed()
            .setColor(gold)
            .setTitle(`${message.guild.name} Ticket Logs`)
            .addField("User:", `${message.author}`)
            .addField("Action Type:", "Unclaiming a ticket.");

        let logchannel = message.guild.channels.find(c => c.name === "ticketlogs")
        logchannel.send(logEmbed)

      channel.send(claimEmbed)
      channel.setName(`ticket-${args[0]}`);
      }
    }
  }
