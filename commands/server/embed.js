const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");


module.exports = {
  config: {
    name: "embed",
    noaliases: "No Aliases",
    aliases: [],
    usage:" tembed Title | Description",
    category: "server",
    setup: "Permissions Required: Manage Roles or Administrator.",
    descrption: "Sends an embed as the bot",
    accessableby: "Administartion"
  },

  run: async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

    const cmd = args.join(' ').split(' | ')
    if (cmd < 1) return message.channel.send("**You did not provide any text to embed!** Example Usage: \`This is my title | This is my description.\`Remember, you must add the \"|\" mark in between.").then(m => m.delete(20000))
    let emb = new RichEmbed()
        .setColor(gold)
        .setTitle(cmd[0])
        .setDescription(cmd[1])

    message.channel.send(emb)

    message.delete();
  }
}
