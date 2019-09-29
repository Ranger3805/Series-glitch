const Discord = require("discord.js");

module.exports= {
    config: {
        name: "leave",
        description: "Makes the bot leave a voice channel",
        usage: "",
        category: "music",
        accessableby: "Members",
        setup: "",
        aliases: []
    },
        run: async (bot, message, args, ops) => {
          if (!message.member.voiceChannel) return message.channel.send("Pleace connect to a voice channel!");

          if (!message.guild.me.voiceChannel) return message.channel.send(" Sorry, I am not in a voice channel!");

          if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, we aren't in the same channel!");

          message.guild.me.voiceChannel.leave();

          message.channel.send("Ok, I am leaving your voice channel now! Bye!")
        }
  }
