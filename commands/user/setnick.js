const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");
module.exports= {
    config: {
        name: "setnick",
        description: "Changes your nickname",
        usage: "",
        category: "user",
        accessableby: "Members",
        aliases: [""]
    },
    run: async (bot, message, args) => {

    await message.delete();

    let ue = new RichEmbed()
    .setDescription(':x: **Missing argument**')
    .addField("You're missing the ``Nickname`` argument.", "**Usage: ``!setnick <nick>``**")
    .setColor("#e05959")
    .setFooter(`Setnick command executed by ${message.author.username}`, `${message.author.avatarURL}`);

  // Embed Usage Send
    if (args.length === 0)
        return message.channel.send(ue);

    let nickname = args.join(' ')
    message.member.setNickname(nickname);
  }
}
