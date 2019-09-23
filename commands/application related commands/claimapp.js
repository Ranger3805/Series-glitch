const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "claimapp",
        description: "Makes a Staff Member claim a application",
        usage: " <application channel you want to claim>",
        category: "application related commands",
        accessableby: "Adminstrator",
        aliases: [""]
    },
    run: async (bot, message, args) => {

      if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")


      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`⭐| Your application is claimed By: ${message.author.username}.`)
      .setColor(gold)
      .setDescription("They will be reviewing it shortly!");

      const channel = message.guild.channels.find(val => val.name === `pending-${args[0]}`)

      if (!channel) return message.channel.send("You can't claim a Channel!");
      else {
        let logEmbed = new RichEmbed()
            .setColor(gold)
            .setTitle(`${message.guild.name} Application Logs`)
            .addField("User:", `${message.author}`)
            .addField("Action Type:", "Claiming an applictaion.");

        let logchannel = message.guild.channels.find(c => c.name === "applogs")
        logchannel.send(logEmbed)
      channel.send(claimEmbed)
      channel.setName(`reviewing-${args[0]}`);
      }
    }
  }
