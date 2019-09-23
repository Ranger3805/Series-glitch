const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "unclaimapp",
        description: "Makes a Staff Member unclaim a application",
        usage: "!unclaim <ticket channel you want to unclaim ",
        category: "application related commands",
        accessableby: "Adminstrator",
        aliases: [""]
    },
    run: async (bot, message, args) => {

      if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")

      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`Your application is set unclaimed By: ${message.author.username}.`)
      .setColor(cyan)
      .setDescription("A new staff member will be reviewing it soon!");

      const channel = message.guild.channels.find(val => val.name === `reviewing-${args[0]}`)

      if (!channel) return message.channel.send("You can't unclaim a Channel!");
      else {
        let logEmbed = new RichEmbed()
            .setColor(gold)
            .setTitle(`${message.guild.name} Application Logs`)
            .addField("User:", `${message.author}`)
            .addField("Action Type:", "Unclaiming an applictaion.");

        let logchannel = message.guild.channels.find(c => c.name === "applogs")
        logchannel.send(logEmbed)

      channel.send(claimEmbed)
      channel.setName(`pending-${args[0]}`);
      }
    }
  }
