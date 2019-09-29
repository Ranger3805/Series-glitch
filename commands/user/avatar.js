const ms = require('ms')

const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js")
const { prefix } = require("../../botconfig.json");
module.exports= {
    config: {
        name: "avatar",
        description: "Grabs the avatar of a user!",
        usage: " <@user>",
        category: "fun",
        accessableby: "Everyone",
        aliases: ["av","pfp"]
    },
    run: async (bot, message, args) => {


    var get_message = await message.channel.send("Getting Avatar...");
    let target = message.mentions.users.first() || msg.author;

    await message.channel.send({
        files: [{
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }]
    });

    get_message.delete();
  }
}
