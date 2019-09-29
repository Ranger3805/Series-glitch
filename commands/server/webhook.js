const { Discord } = require("discord.js")
const { RichEmbed } = require("discord.js")
const { WebhookClient } = require("discord.js")
const { gold } = require("../../colours.json")
const { prefix } = require("../../botconfig.json");
module.exports= {
    config: {
        name: "webhook",
        description: "Create a webhook!",
        usage: " <#channel> <text> ",
        category: "server",
        accessableby: "Administrators",
        aliases: ["web"]
    },
    run: async (bot, message, args) => {

      const cmd = args.slice(1).join(' ').split(' | ');

      if (cmd < 1) return message.channel.send("**You did not provide any text to embed!** Example Usage: !web #general This is my title | This is my description. Remember, you must add the \"|\" mark in between.").then(m => m.delete(20000))
            let emb = new RichEmbed()
            .setTitle(cmd[0])
            .setColor(gold)
            .setDescription(cmd[1]);

if (!message.guild.member(bot.user).hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`Sorry, couldn't make the webhook. I dont have permission too.`)

 if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.reply("Sorry. Seems you dont have the permissions to create a webhook!");

 let channel = message.mentions.channels.first() || message.channel;





 channel.createWebhook(`⭐| ${message.guild.name}'s BOT` ,
   message.guild.iconURL ,
   "Webhook Premium command ONLY!")
   .then(wb => {


     const webH = new WebhookClient(wb.id, wb.token);

     webH.send(emb)


   })
   .catch(err => console.error(err))
 }
}
