const discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "close",
        description: "Closes a Ticket",
        usage: "",
        category: "ticket related commands",
        accessableby: "Staff",
        aliases: ["ct", "forceclose"]
    },
    run: async (bot, message, args) => {
  let userDiscriminator = message.author.username;
  let logEmbed = new RichEmbed()
      .setColor(gold)
      .setTitle(`${message.guild.name} Ticket Logs`)
      .addField("User:", `${message.author}`)
      .addField("Action Type:", "Closing a ticket.");

  let logchannel = message.guild.channels.find(c => c.name === "ticketlogs")

    if (!message.channel.name.startsWith("ticket")) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!confirm\`. This will time out in 10 seconds and be cancelled.`)
        .then((m) => {
            message.channel.awaitMessages(response => response.content === '!confirm', {
                    max: 1,
                    time: 10000,
                    errors: ['time'],
                })
                .then((collected) => {
                  logchannel.send(logEmbed)
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
