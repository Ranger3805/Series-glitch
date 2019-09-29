const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js")
const { prefix } = require("../../botconfig.json");

module.exports= {
    config: {
    name: "setstatus",
    noalias: "No Aliases",
    description: "set the bots status",
    usage: ``,
    category: "owner",
    accessableby: "Bot Owner",
    aliases: []
},

  run: async (bot, message, args) => {

  if(message.author.id != "459414913505558549") return message.channel.send("Only the **Bot Owner** can use this command")

  if(args == "") {
    message.channel.send(`Make sure it is either **dnd**, **online**, **idle**, **invisible**`)
  }

  if(args[0] === 'dnd') {
    bot.user.setStatus('dnd')
    message.channel.send(` Successfully changed the bots status to **Do Not Disturb**`)
  }

  if(args[0] === 'idle') {
    bot.user.setStatus('idle')
    message.channel.send(` Successfully changed the bots status to **idle**`)
  }

  if(args[0] === 'online') {
    bot.user.setStatus('online')
    message.channel.send(` Successfully changed the bots status to default -> **online**`)
  }

  if(args[0] === 'invisible') {
    bot.user.setStatus('invisible')
    message.channel.send(` Successfully changed the bots status to **invisible**`)
  }

  if(args[0] === 'offline') {
    bot.user.setStatus('invisible')
    message.channel.send(` Successfully changed the bots status to **invisible**`)
   }
  }
 }
