const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js");
const { cyan } = require("../../colours.json")

module.exports = {
    config: {
        name: "invite",
        aliases: [],
        usage: "",
        category: "bot",
        setup: "",
        description: "An invite link for the bot.",
        accessableby: "Members"
    },

      run: async (bot, message, args) => {

      let bicon = bot.user.displayAvatarURL;

      let botEmbed = new RichEmbed()
      .setTitle("😊| Invite Me!")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=608625475379527680&scope=bot&permissions=2080898303")
      .setColor(cyan);

      message.channel.send(botEmbed);
   }
 }
