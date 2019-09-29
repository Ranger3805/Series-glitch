const { discord } = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "wikilink",
        description: "Make the bot search wikipedia and give you the link to your topic!",
        usage: "",
        category: "fun",
        accessableby: "Members",
        aliases: []
    },
  run: async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let wikiEmbed = new RichEmbed()
    .setTitle("😊| WikiLink!")
    .setDescription("Wanted to look for something? There! Click the link below and get your answwers!")
    .setURL(`https://en.wikipedia.org/wiki/${args.join("+")}`)
    .setAuthor("Your search link is found!");

    message.channel.send(wikiEmbed);
  }
}
