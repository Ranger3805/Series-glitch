const { RichEmbed } = require("discord.js");
const { gold } = require("../../colours.json")
module.exports = {
    config: {
        name: "new",
        description: "Create a Ticket [Make a category named: `tickets`]",
        usage: "",
        category: "ticket related commands",
        accessableby: "Members",
        aliases: ["create", "ticket"]
    },
    run: async (bot, message, args) => {

    let ticketchategory = message.guild.channels.find(channel => channel.name == "tickets");

    var userName = message.author.id;

    var userDiscriminator = message.author.username;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name.startsWith("ticket-" + userDiscriminator)) {

            message.channel.send(`${message.author.username} You have already created a ticket`);

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new RichEmbed()
        .setColor(gold)
        .setTitle("⭐| Hi, " + message.author.username)
        .setFooter(`Support channel is created`);

    message.channel.send(embedCreateTicket);

    message.guild.createChannel("ticket-"+ userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(ticketchategory).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.guild.roles.find('name', "Support Member"), { "READ_MESSAGES": true });
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new RichEmbed()
                .setColor(gold)
                .setTitle("⭐| Hi, " + message.author.username.toString())
                .setDescription(`Hello <@${message.author.id}>, \n Welcome to our Support System, Please wait for one of our Support Members to assist you. \n Subject: ${args.join(' ')}`);


            let logEmbed = new RichEmbed()
               .setColor(gold)
               .setTitle(`${message.guild.name} Ticket Logs`)
               .addField("User:", `${message.author}`)
               .addField("Action Type:", "Creating a ticket.")
               .addField("Subject:", `${args.join(' ')}`);

            let logchannel = message.guild.channels.find(c => c.name === "ticketlogs")
            logchannel.send(logEmbed);

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });

    }).catch(err => {
        message.channel.send("Something went wrong.");
    });

}
}
