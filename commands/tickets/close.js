const { gold } = require ("../../colours.json");
const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
 
module.exports = {
    config: {
    name: "close",
    aliases: [],
    usage: "<reason>",
    category: "tickets",
    description: "Closes a ticket",
    accessableby: "Everyone"  
},
run : async (bot, message, args) => {
  
    if (message.member.roles.some(role => role.name === 'Blacklisted')) return;
      message.delete()
    let reason = args.join(" ")
    if (!reason) reason = "No reason given"
    const channelname = message.channel.name 
   
//if it has ticket or application in the name 

    let ticketauthor = message.channel.permissionOverwrites.find(a => a.type == 'member' && a.deny == 0 && a.allow > 1)   //finds out who made the ticket
    if(ticketauthor.id === message.member.id || (message.member.roles.some(role => role.name === 'Support Member'))) {
      bot.users.get(ticketauthor.id).send("`Your ticket was closed for: "+reason+ ".(ticketname: "+channelname+")`")
    } 
  else 
  { message.channel.send("`You are not allowed to close this ticket`")
  } //checks if the ticket author or a support role is trying to close
  
    let ticketid = ticketauthor.id
    let subject = message.channel.parent.name
    let sembed = new Discord.RichEmbed()
    .setColor(gold)
    .setTitle(`#${channelname} has been closed`)
    .setDescription(`**Ticket Author** <@${ticketauthor.id}> \n**Channel Name: ** <#${message.channel.id}>\n**Ticket ID: ** ${ticketid}\n**Category: **${subject}\n**Reason: ** ${reason}`)
    .setFooter("Series", bot.user.displayAvatarURL)
    .setTimestamp();
    
    let sChannel = message.guild.channels.find(c => c.name === "ticketlogs")
    
    if(["application", "ticket", "claimed", "accepted", "denied"].some((x) => channelname.startsWith(x))){
        sChannel.send(sembed)//writes at the end of the file who closed the ticket
        message.channel.delete()
    }
}
}
