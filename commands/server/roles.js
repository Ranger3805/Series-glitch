const { RichEmbed } = require('discord.js');
const { prefix } = require('../../botconfig.json');

module.exports = {
    config: {
        name: "roles",
        description: "Displays all roles in a server!",
        usage: "",
        category: "server",
        setup: "",
        accessableby: "Member",
        aliases: ["sr", "serverroles"]
    },
    run: async (bot, message, args) => {

        const roles = message.guild.roles;
        const embed = new RichEmbed()
            .setDescription(roles.map(r => `${r.name}`).join("\n"))

          message.channel.send(embed)
    }
}
