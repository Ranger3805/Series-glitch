const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { green_light } = require("../../colours.json")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "accept",
        description: "Makes a Staff Member accept an application",
        usage: " <application channel you want to accept>",
        category: "application related commands",
        accessableby: "Adminstrator",
        aliases: ["pass"]
    },
    run: async (bot, message, args) => {

      if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")


      var userName = message.author.id;
      var userDiscriminator = message.author.username;

    const cmd = args.slice(1).join(' ');
    message.delete().catch();

    let claimEmbed = new Discord.RichEmbed()

      .setTitle(`✅| Your application is accepted by: ${message.author.username}.`)
      .setColor(green_light)
      .setDescription(`Reason: ${cmd} `);

      const channel = message.guild.channels.find(val => val.name === `reviewing-${args[0]}`)

      if (!channel) return message.channel.send("You can't accept a Channel!");
      else {
        let logEmbed = new RichEmbed()
            .setColor(gold)
            .setTitle(`${message.guild.name} Application Logs`)
            .addField("User:", `${message.author}`)
            .addField("Action Type:", `User has accepted application in: ${message.channel}!`);

        let logchannel = message.guild.channels.find(c => c.name === "applogs")
        logchannel.send(logEmbed)

      channel.send(claimEmbed)
      channel.setName(`accepted-${args[0]}`);
      }
    }
  }
