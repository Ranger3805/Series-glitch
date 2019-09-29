const { Discord } = require("discord.js")
const { gold } = require("../../colours.json")
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "8ball",
        description: "Ask an 8ball for a question.",
        usage: " <text>",
        category: "fun",
        accessableby: "Member",
        aliases: ["fortune"]
    },

run: async (bot, message, args) => {
    if(!args[0]) return message.reply("Please enter a question to ask the magic 8ball.");
    const replies = [
        "Yes.",
        "No.",
        "I don't know.",
        "Try again later.",
        "Maybe...",
        "Hmmm... I didnt think about it... But I think Okay??"
    ];
    const result = Math.floor((Math.random() * replies.length));
    const question = args.join(" ");

    const embed = new RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(gold)
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setTimestamp();

    message.channel.send(embed);

}
};
