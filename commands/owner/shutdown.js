const { ownerid, prefix, token } = require("../../botconfig.json");
module.exports = { 
    config: {
        name: "restart",
        description: "",
        accessableby: "Bot Owner",
        type: "owner",
        usage: `${prefix}restart`,
        category: "owner",
    },
    run: async (bot, message, args) => {
 if(message.author.id == ownerid){
   bot.destroy().then(_ => bot.login(token))
   message.channel.send("Restarting...").then(m => {
     m.edit(`Restarted!`)
   })    
 }
    }
} 