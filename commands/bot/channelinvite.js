const { Discord } = require('discord.js');
const { prefix } = require('../../botconfig.json');

module.exports = {
    config: {
        name: "channelinvite",
        description: "Makes an invite to the current channel!",
        usage: "",
        category: "bot",
        setup: "",
        accessableby: "Member",
        aliases: ["cinvite", "createinvite"]
    },
    run: async (bot, message, args) => {

    const setChannelID = message.content.split(' ');

    try{
        message.guild.channels.get(setChannelID[1]).createInvite().then(invite =>
            message.channel.send("The channel invite has been created: \n" + invite.url)
        );
    }

    catch(error){
        console.error(`I could not create the invite for the channel: ${error}`);
        message.channel.send(`You have to paste a correct channel ID!`);
    }
  }
}
