const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json")
const { prefix } = require("../../botconfig.json");
module.exports= {
    config: {
        name: "bday",
        description: "Create a birthday!",
        usage: "<name> <age> ",
        category: "server",
        setup: "Permissions Required: Manage Roles or Administrator. Channel Required: \`🎉》birthday\`",
        accessableby: "Administartors",
        aliases: ["birthday"]
    },
    run: async (bot, message, args, guild) => {
      if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`Sorry, couldn't make the announcement. I dont have permission too.`)

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry. Seems you dont have the permissions to create a bday announcement!");
      
      
      const cmd = args.slice(1).join(' ').split(' | ');

      if (cmd < 1) return message.channel.send("**You did not provide any text to embed!** Example Usage:\`!partner Series Hey this series\`").then(m => m.delete(20000))
      
      let botEmbed = new RichEmbed()
      .setTitle("🎉》 Birthday!")
      .setDescription(`Its ${args[0]} birthday! He/She is now ${args[1]}, Please wish them a great birhtday in there dms!`)
      .setColor(gold);

        let partner = message.guild.channels.find(c => c.name === "🎉》birthday")
        partner.send(botEmbed)
        
    }
}