const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");


module.exports = {
  config: {
    name: "question",
    noaliases: "No Aliases",
    aliases: [],
    usage:" <questions> [do shift+enter to make lines.]",
    category: "application related commands",
    descrption: "Sends an question embed as the bot",
    accessableby: "Administartion"
  },

  run: async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

    const cmd = args.slice(1).join(' ')
    if (!cmd < 0) return message.channel.send("**You did not provide any question to embed!** Example Usage: !question How is the weather today?").then(m => m.delete(20000))
    let emb = new RichEmbed()
        .setColor(gold)
        .setTitle("Questions:")
        .setDescription(`These are some questions set by: ${message.guild.name}. Please Solve these in addition to be able to evaluate your interview.`)
        .addField("Answer the following:", cmd)
       const channel = message.guild.channels.find(val => val.name === `reviewing-${args[0]}`)

        if (!channel) return message.channel.send("You have to claim the  application first!");
        else {
        channel.send(emb)

    message.delete();
  }
}
}
