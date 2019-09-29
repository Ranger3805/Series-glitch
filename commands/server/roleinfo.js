const { RichEmbed } = require("discord.js");
const { gold } = require("../../colours.json");
const { stripIndents } = require("common-tags");
const moment = require('moment');

module.exports = {
    config: {
        name: "roleinfo",
        aliases: ["role", "ri"],
        usage: `<role>`,
        category: "server",
        setup: "",
        description: "Displays information on a role within the guild",
        accessableby: "Everyone"
    },
    run: async (bot, message, args) => {
       let role = message.guild.roles.find(r => r.name === args.join(" "))
        if (!role) return message.reply("sorry! I couldn't find that role.")

        const emb = new RichEmbed()
            .setColor(gold)
            .addField('⭐| Role Information',
                stripIndents`
                • **Role Name:** ${role.name}
                • **Role ID:** ${role.id}
                • **Members:** ${role.members.size}
                • **Colour:** ${role.hexColor}
                • **Mentionable:** ${role.mentionable ? 'Yes' : 'No'}
                • **Created On:** ${moment.utc(role.createdAt).format("dddd, MMMM Do YYYY")}
    `)
        message.channel.send(emb)
    }
}
