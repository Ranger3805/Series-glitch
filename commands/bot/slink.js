const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js");
const { cyan } = require("../../colours.json")

module.exports = {
    config: {
        name: "support",
        aliases: [],
        usage: "",
        category: "bot",
        setup: "",
        description: "An invite link for the Series Support Server.",
        accessableby: "Members"
    },

      run: async (bot, message, args) => {

      let bicon = bot.user.displayAvatarURL;

      let botEmbed = new RichEmbed()
      .setTitle("😊| Server Link!")
      .setURL("https://discord.gg/wen9SQC")
      .setColor(cyan);

      message.channel.send(botEmbed);
   }
 }
