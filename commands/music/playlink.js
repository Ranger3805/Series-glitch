const ytdl = require("ytdl-core");

module.exports= {
    config: {
        name: "playlink",
        description: "Plays music using a link",
        usage: " <link>",
        category: "music",
        accessableby: "Members",
        setup: "",
        aliases: []
    },
    run: async (bot, message, args, ops) => {
      if (!message.member.voiceChannel) return message.channel.send("You didn't join a voice channel! Please connect to a voice channel!");

      //this checks if the bot is in a voice channel already!
      if (message.guild.me.voiceChannel) return message.channel.send("Sorry, the bot is already in a voice channel!");

      if(!args[0]) return message.channel.send("You didn't provide a link!");

      let validate = await ytdl.validateURL(args[0]);

      if (!validate) return  message.channel.send("Something happened! Please contact the Service Runner!");

      let info = await ytdl.getInfo(args[0]);

      let connection = await message.member.voiceChannel.join();

      let dispatcher = await connection.playStream(ytdl(args[0], { filter: `audioonly`}));

      message.channel.send(`Now Playing: ${info.title}`);

    }
  }
