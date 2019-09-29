const { RichEmbed } = require('discord.js');
const { green_light } = require("../../colours.json");
module.exports = {
    config: {
        name: "update",
        description: "Updates the bot!",
        usage: "",
        category: "owner",
        accessableby: "Bot Owner",
        aliases: ["relog"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != "459414913505558549") return message.channel.send("You're not the bot the owner!")

      const sayMessage = args.join(" ");
      message.delete().catch();

      let botEmbed = new RichEmbed()
      .setTitle(" 📢 | Update!")
      .setDescription(`By <@${message.author.id}>`)
      .setColor(green_light)
      .addField("Message:", `${sayMessage}`);

      let announcementschannel = message.guild.channels.find(`name`, "❕development-updates❕");
      if(!announcementschannel)  message.channel.send("Couldn't find the channel!")


      announcementschannel.send(botEmbed);
   }
}