module.exports = {
    config: {
        name: "dm",
        description: "Direct Messages a User",
        usage: " <user> <text>",
        category: "miscellaneous",
        accessableby: "Members",
        setup: "",
        aliases: ["directmessage"]
    },
  run: async (bot, message, args) => {
var mention = message.mentions.users.first();

if (mention == null) { return; }
if (!mention == null) return message.channel.send('User not found!')
  let rreason = args.join(" ").slice(22);
  mention.send (`**You have been dmed by || ${message.author} || in the server named: ⭐| ${message.guild.name}** \n The message: ${rreason}`);
  message.channel.send("<:yes:625682407722450947>| User has been direct messaged!")
}
}
