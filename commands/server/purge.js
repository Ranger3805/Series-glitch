const Discord = require("discord.js");

module.exports = {
config: {
    name: "purge",
    description: "deletes chat in a channel",
    category: "server",
    usage: "<number>",
    setup: "",
    accessableby: "Moderator",
},
run: async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.send.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("No number identified!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`<:yes:625682407722450947>| Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  })

  }
  }
