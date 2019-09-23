const { RichEmbed } = require("discord.js")
const { discord } = require("discord.js")
const { gold } = require("../../colours.json");

module.exports = {
    config: {
        name: "apply",
        description: "Create a Ticket for you to make a private application. [Make a category named: `applications`]",
        usage: " <reason>",
        category: "application related commands",
        accessableby: "Members",
        aliases: ["app"]
    },
    run: async (bot, message, args) => {

    let ticketchategory = message.guild.channels.find(channel => channel.name == "applications");

    let userName = message.author.discriminator;

    let userDiscriminator = message.author.username;

    let bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name.startsWith(`app-${userDiscriminator}${userName}`)) {

            message.channel.send(`${message.author.username} You have already created an application! Wait for it to be read.`);

            bool = true;

        }

    });

    if (bool == true) return;

    let embedCreateTicket = new RichEmbed()
        .setColor(gold)
        .setTitle("⭐| Hi, " + message.author.username)
        .setFooter(`Application ticket is created`);

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(`app-${userDiscriminator}${userName}`, "text").then((createdChan) => {

        createdChan.setParent(ticketchategory).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            let embedParent = new RichEmbed()
                .setColor(gold)
                .setTitle("⭐| Hi, " + message.author.username.toString())
                .setDescription(`Hello <@${message.author.id}>, \n Welcome to our Application System, Please answer the following questions using this format \`Quesion No. Answer\` and after you do send them into the exact same channel and an HR will review it after they may add some questions and you have to answer. \n After completing your questions do \`!done\`. \n  Questions: \n 1. Correct the following: helo hw do i wok her \n 2. Choose the right phrase: \n - hello welcome to ${message.guild.name}\n - Hello, Welcome to ${message.guild.name}.\n - Hello welcome to ${message.guild.name}. \n 3. Why do you want to be a staff member?\n 4. What qualities you have that let us choose you over others?\n 5. Have you ever been in similar business or idea before?\n 6. If you see a HR abusing there abilities, What would you do?\n 7. If you see a staff member not doing there job properly(not knowing how to do it), What would you do?\n 8. Rate your activity from 1 - 10.\n 9. Rate your grammar and vocabulary from 1 - 10.\n 10. Have you seen something that needs improvement in ${message.guild.name}? If you did please tell us what was it.`);
            settedParent.send(embedParent);


            let logEmbed = new RichEmbed()
                .setColor(gold)
                .setTitle(`${message.guild.name} Application Logs`)
                .addField("User:", `${message.author}`)
                .addField("Action Type:", "Creating Applictaion.");

            let logchannel = message.guild.channels.find(c => c.name === "applogs")
            logchannel.send(logEmbed)

        }).catch(err => {
            message.channel.send("Something went wrong.");
        });

    }).catch(err => {
        message.channel.send("Something went wrong.");
    });

}
}
