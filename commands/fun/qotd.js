const { RichEmbed } = require('discord.js')
const { gold } = require("../../colours.json");
module.exports = {
    config: {
        name: "qotd",
        description: "Question  of the day command",
        usage: " <text>",
        category: "fun",
        setup: "Channel Required: `\❓》qotd\`",
        accessableby: "Staff",
        aliases: ["question"]
    },
    run: async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();

      let botEmbed = new RichEmbed()
      .setTitle(" ❓ | QOTD!")
      .setDescription(`By <@${message.author.id}>`)
      .setColor(gold)
      .addField("Message:", `${sayMessage}`);

      let announcementschannel = message.guild.channels.find(`name`, "❓》qotd");
      if(!announcementschannel) return message.channel.send("Couldn't find the channel!")


      announcementschannel.send(botEmbed);
   }
 }
