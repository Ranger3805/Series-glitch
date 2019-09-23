const discord = require("discord.js")
const { RichEmbed } =require("discord.js")
const { gold } = require("../../colours.json");
module.exports = {
    config: {
        name: "endpass",
        description: "Closes a application(passed)",
        usage: "",
        category: "application related commands",
        accessableby: "Staff",
        aliases: ["closeapp"]
    },
    run: async (bot, message, args) => {
  let userDiscriminator = message.author.username;
  let logEmbed = new RichEmbed()
      .setColor(gold)
      .setTitle(`${message.guild.name} Application Logs`)
      .addField("User:", `${message.author}`)
      .addField("Action Type:", "Closing a application. [Passed]");

  let logchannel = message.guild.channels.find(c => c.name === "applogs")

    if (!message.channel.name.startsWith("accepted")) return message.channel.send(`You can't use the close command outside of a application channel.`);
    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!confirm\`. This will time out in 10 seconds and be cancelled.`)
        .then((m) => {
            message.channel.awaitMessages(response => response.content === '!confirm', {
                    max: 1,
                    time: 10000,
                    errors: ['time'],
                })
                .then((collected) => {
                  logchannel.send(logEmbed);
                    message.channel.delete();
                })
                .catch(() => {
                    m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                        m2.delete();
                    }, 3000);
                });
        });

      }
    }
