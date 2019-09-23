module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: "",
        category: "owner",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != "459414913505558549") return message.channel.send("You're not the bot the owner!")

    try {
      let announcementchannel = message.guild.channels.find(`name`, 'announcements')
      if (!announcementchannel) return message.channel(" no channel was made.");
      
    
        await announcementchannel.send("⚠️| WARNING! SERIES HAS BRRN DISABLED DUE TO SAFETY ISSUES WITH IT. CONTACT SERVICE PROVIDER. @everyone");
      message.delete();
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }



    }
}
