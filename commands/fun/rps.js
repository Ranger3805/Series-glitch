const { RichEmbed } = require('discord.js')
const { gold } = require("../../colours.json");
module.exports = {
    config: {
        name: "rps",
        description: "Rock, Paper, Scissors",
        usage: " <your choice>",
        category: "fun",
        accessableby: "Members",
        aliases: ["rockpaperscissors"]
    },
    run: async (bot, message, args) => {
      if(!args[0]) return message.reply("Please enter a a choice from Rock or paper or scissors if you get same you won if you got another thing which is higher than your choice you lose");
        const replies = [
            "Rock.",
            "Paper.",
            "Scissors.",
        ];
        const result = Math.floor((Math.random() * replies.length));
        const question = args.join(" ");

        const embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(gold)
        .addField("Choice", question)
        .addField("Answer", replies[result])
        .setTimestamp();

        message.channel.send(embed);

    }

};
