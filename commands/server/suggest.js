const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");
module.exports= {
    config: {
        name: "suggest",
        description: "makes a usggestion in a channel named suggestions!",
        usage: "",
        category: "server",
        accessableby: "Members",
        aliases: [""]
    },
    run: async (bot, message, args) => {

let userSuggestion = args.slice(0).join(" ");
let user = message.author

// if there is NO message: It will delete the command message then reply with the correct usage then delete that message after 4 seconds.

if (args.length === 0) {
    message.delete();
    return message.reply('!suggest <SuggestionGoesHere>').then(m => m.delete(4000))
    };

// if there is a message: It will delete the command message then send the embed and then react with emojis in order.
  let suggestion = message.guild.channels.find(c => c.name === "suggestions")
message.delete();
let newEmbed = new RichEmbed()
    .setColor(gold)
    .setAuthor(`${user.tag}`, `${user.avatarURL}`)
    .setTitle('Suggestion:')
    .setDescription(userSuggestion)
    .setTimestamp()
return suggestion.send(newEmbed).then(async msg => {
        await msg.react('👍');
        await msg.react('👎');
    });
  }
}
