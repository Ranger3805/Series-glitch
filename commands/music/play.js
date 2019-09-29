const search = require("yt-search");
const Discord = require("discord.js");

module.exports= {
    config: {
        name: "play",
        description: "Searches youtube for the video you wanna play!",
        usage: " <name>",
        category: "music",
        accessableby: "Members",
        setup: "",
        aliases: []
    },
    run: async (bot, message, args, ops) => {
      search(args.join(" "), function(err, res){
      if (err) return message.channel.send("Something have went wrong!");

      let videos = res.videos.slice(0, 10);
      let resp = ``;
      for (var i in videos) {
        resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
      }
      resp += `\n***choose a number between*** \`1-${videos.length}\``;

      message.channel.send(resp);

      const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

      const collector = message.channel.createMessageCollector(filter);

      collector.videos = videos;

      collector.once(`collect`, function(m){
        let commandFile = require("./playlink.js");
        commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
      })
    });
  }
}
