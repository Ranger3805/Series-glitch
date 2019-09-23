const { RichEmbed } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "done",
        description: "Closes a finished application and set its status Pending.",
        usage: "",
        category: "application related commands",
        accessableby: "Everyone",
        aliases: ["finished"]
    },
    run: async (bot, message, args) => {
      let userName = message.author.discriminator;
      let aut = message.author;
      let userDiscriminator = message.author.username;
      let approle = message.guild.roles.find(x => x.name === "Application Reader");

      let logEmbed = new RichEmbed()
          .setColor(gold)
          .setTitle(`${message.guild.name} Application Logs`)
          .addField("User:", `${message.author}`)
          .addField("Action Type:", `User has Finished in ${message.channel}`);

      let logchannel = message.guild.channels.find(c => c.name === "applogs")


    if (!message.channel.name.startsWith("app")) return message.channel.send(`You can't use the done command outside of a application channel.`);
    message.channel.send(`Are you sure? Make sure to revise before submitting your answers! If your done say \`yes\` and the bot will close the ticket.`)
        .then((m) => {
            message.channel.awaitMessages(response => response.content === 'yes', {
                    max: 1,
                    time: 200000,
                    errors: ['time'],
                })
                .then((collected) => {
                  logchannel.send(logEmbed);
                  aut.send("Your application is being read!");
                  message.channel.setName(`pending-${userDiscriminator}${userName}`);
                })
                .catch(() => {
                    m.edit('Application sending timed out, please re do the command again.').then(m2 => {
                        m2.delete();
                    }, 3000);
                });
        });

      }
    }
