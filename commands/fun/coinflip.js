const { RichEmbed } = require('discord.js')
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "coinflip",
        description: "Makes the bot flip a coin.",
        usage: "",
        category: "fun",
        accessableby: "Members",
        aliases: ["cf", "flip"]
    },
  run: async (bot, message, args) => {
        const replies = [
            "Head.",
            "Tails",
        ];
        const result = Math.floor((Math.random() * replies.length));
        const question = args.join(" ");

        const embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(gold)
        .addField("Answer", replies[result])
        .setTimestamp();

        message.channel.send(embed);

    }
  }
