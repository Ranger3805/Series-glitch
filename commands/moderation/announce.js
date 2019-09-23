const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json")

module.exports= {
    config: {
        name: "announce",
        description: "Makes announcement in announcements[you need to make the exact same name for this comamnd to work!]",
        usage: " <text>",
        category: "moderation",
        accessableby: "Administartors",
        aliases: ["ann", "h"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")

     const sayMessage = args.join(" ");
      message.delete().catch();

      let botEmbed = new RichEmbed()
      .setTitle("<:announcement:625682603734728704>| Announcement!")
      .setDescription(`Made by: <@${message.author.id}>`)
      .setColor(gold)
      .addField("Message:", `${sayMessage}`);

      let announcementschannel = message.guild.channels.find(`name`, "announcements");
      if(!announcementschannel) return message.channel.send("Couldn't find the channel!")


      announcementschannel.send(botEmbed)
   }
 }
