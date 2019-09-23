const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "decline",
        description: "Makes a Staff Member decline an application",
        usage: " <application channel you want to decline>",
        category: "application related commands",
        accessableby: "Adminstrator",
        aliases: ["fail"]
    },
    run: async (bot, message, args) => {

      if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")


      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    const cmd = args.slice(1).join(' ');
    message.delete().catch();

    let logEmbed = new RichEmbed()
        .setColor(gold)
        .setTitle(`${message.guild.name} Application Logs`)
        .addField("User:", `${message.author}`)
        .addField("Action Type:", `User has declined application in: ${message.channel}!`)
        .addField("Reason:", `${cmd}`)

    let logchannel = message.guild.channels.find(c => c.name === "applogs")

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`❌| Your application is declined by: ${message.author.username}.`)
      .setColor(red_light)
      .setDescription(`Reason: ${cmd} `);

      const channel = message.guild.channels.find(val => val.name === `reviewing-${args[0]}`)

      if (!channel) return message.channel.send("You can't decline a Channel!");
      else {
      channel.send(claimEmbed)
      logchannel.send(logEmbed)
      channel.setName(`declined-${args[0]}`);
      }
    }
  }
