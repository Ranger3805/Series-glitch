const { RichEmbed } = require('discord.js')
const { gold } = require("../../colours.json");
module.exports = {
    config: {
        name: "fotd",
        description: "Fact of the day command",
        usage: " <text>",
        category: "fun",
        accessableby: "Staff",
        aliases: ["fact"]
    },
    run: async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();

      let botEmbed = new RichEmbed()
      .setTitle(" ❕ | Fact of the day!")
      .setDescription(`By <@${message.author.id}>`)
      .setColor(gold)
      .addField("Message:", `${sayMessage}`);

      let announcementschannel = message.guild.channels.find(`name`, "❕》fotd");
      if(!announcementschannel) return message.channel.send("Couldn't find the channel!")


      announcementschannel.send(botEmbed);
   }
 }
