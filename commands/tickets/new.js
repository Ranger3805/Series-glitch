const { gold } = require("../../colours.json");
const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
 
module.exports = {
    config: {
    name: "new",
    aliases: ["create", "ticket"],
    usage: "<ticket/application>",
    category: "tickets",
    setup: "Category Required: \`ticket\` and \`application\`. Roles Required: Blaclisted, Application[access to applications.] and Ticket[access to tickets]",
    description: "Creates a ticket",
    accessableby: "Everyone"
},
run : async (bot, message, args) => {   
        
    if (message.member.roles.some(role => role.name === 'Blacklisted')) return; //role that isnt allowed to use tickets
    message.delete()
    const subject = args[0];
    if (!subject) return message.channel.send("<:no:625682483517587456> **No subject was selected! Please choose: \n 1- ticket \n 2- application **");
    if (subject != "ticket") // first categorypp ly
    if (subject != "application") return message.channel.send("<:no:625682483517587456> **Invalid subject! Please choose: \n 1- ticket \n 2- application **");
    var tickets = message.author.username
        var ticketsId = message.author.id
        
    const capitalise = subject.slice(0, 1).toUpperCase() + subject.slice(1)
      let everyone = message.guild.roles.find(r => r.name == "@everyone")
      let support = message.guild.roles.find(r => r.name == `${capitalise}`) //role that is allowed to see ticket
      let channel = await message.guild.createChannel(`${subject}-${tickets}`,{
          type: "textchannel",
          permissionOverwrites: [
              {
                  id: everyone.id,       //blocks everyone else perms
                  deny: ["VIEW_CHANNEL"]
              },
              {
                  id: support.id,  //gives roles above(support) perms
                  allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
              {
                  id: message.author.id,    //gives author perms
                  allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              }
          ]})
      let category = message.guild.channels.find(c => c.name == subject && c.type == "category")
 
 
        if (category && channel) await channel.setParent(category.id);  //sets the channel under the category subject
        else console.error(`One of the channels is missing:\nCategory: ${!!category}\nChannel: ${!!channel}`)
      message.channel.send(`✅ **Your ${capitalise} has been created** ${channel}`)
      let embed = new Discord.RichEmbed()
      .setColor(gold)
      .setTitle(`Welcome ${message.member.user.username}`)
      .setDescription(`\n\nPlease wait while our support team gets to you!`)
      .setFooter("Series", bot.user.displayAvatarURL)
      .addField("**Category: **", `${capitalise}`)
      .setTimestamp()
          channel.send(embed)
 
          let sembed = new Discord.RichEmbed()
          .setColor(gold)
          .setTitle(`${message.member.user.username} opened a new thread`)
          .setDescription(`**Ticket Author** <@${message.member.id}> \n**Channel Name: ** <#${channel.id}>\n**Ticket ID: ** ${ticketsId}\n**Category: **${capitalise}`)
          .setFooter("Series", bot.user.displayAvatarURL)
          .setTimestamp()
         
              let sChannel = message.guild.channels.find(c => c.name === "ticketlogs")
              sChannel.send(sembed);
 //writes at the beginning of the file who made the ticket
}
}