const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { ownerid, version } = require("../../botconfig.json");

module.exports = {
    config: {
        name: "botinfo",
        description: "",
        usage: "",
        category: "bot",
        accessableby: "Members",
        setup: "",
        aliases: ["bi"]
    },
    run: async (bot, message, args) => {
    let biembed = new RichEmbed()
    .setColor(cyan)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.username}'s Info`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**Bot's Name:**", bot.user.username)
    .addField("**Bot Owner:**", ownerid)
    .addField("**Bot Version:**", version)
    .addField("**Bot ID:**", bot.user.id)
    .addField("**Bot Discriminator:**", bot.user.discriminator)
    .addField("**Bot Status:**", "Online ✅")
    .addField("**Developing Language**", "discord.js (JavaScript)")
    .addField("**Guild Count:**", bot.guilds.size)
    .addField("**Users Count:**", bot.users.size)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
    }
}