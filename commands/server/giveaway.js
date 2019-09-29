const { discord } = require("discord.js")
const { gold } = require("../../colours.json")
const { RichEmbed } = require("discord.js");


module.exports = {
  config: {
    name: "giveaway",
    noaliases: "No Aliases",
    aliases: [],
    usage:"<winnercount> <time in secounds> <item>",
    category: "server",
    setup: "",
    descrption: "Sends a giveaway in the server.",
    accessableby: "Administartors"
  },
  run: async (bot, message, args) => {
// Argumenten die we later nodig hebben.
    var item = "";
    var time;
    var winnerCount;
 
    // Nakijken als je perms hebt om dit command te doen.
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry! You can't do a giveaway!");
 
    // !giveaway aantalWinnaars seconden itemOmTeWinnen.
 
    // Aantal winnaars opvragen.
    winnerCount = args[0];
    // Tijd hoelang het moet duren.
    time = args[1];
    // Welke prijs men kan winnen.
    item = args.slice(2, args.length).join(' ');
 
    // Verwijder het bericht dat net is gemaakt door de gebruiker.
    message.delete();
 
    // Verval datum berekenen.
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));
 
    // Maak embed aan.
    var giveawayEmbed = new RichEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Ends in: ${dateTime}`)
        .setDescription(`Winning item: ${item}`);
 
    // Verzend embed en zet de reactie op de popper.
    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
 
    // Zet een timeout die na het aantal seconden af gaat.
    setTimeout(function () {
 
        // Argumenten die we nodig hebben.
        var random = 0;
        var winners = [];
        var inList = false;
 
        // Verkrijg de gebruikers die gereageerd hebben op de giveaway.
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
        // Hier gaan we al de mensen over gaan en kijken als de bot er tussen staan
        // De bot moeten we uit de lijst weghalen en dan gaan we verder.
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        // Hier kijken we na als er wel iemand heeft meegedaan.
        if (peopleReacted.length == 0) {
            return message.channel.send("No one has won so the bot wins.");
        }
 
        // Tijdelijk kijken we na als er te wienig mensen hebben mee gedaan aan de wedstrijd.
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("There are too few people who participated, so the bot won.");
        }
 
        // Voor het aantal winnaars dat we eerder hebben opgegeven gaan we een random nummer aanmaken en de user in een array zetten.
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            // Aanmaken van een random getal zodat we een user kunnen kiezen.
            random = Math.floor(Math.random() * peopleReacted.length);
 
            // Als een winnaar al voorkomt in de winnaars lijst dan moeten we opnieuw gaan zoeken naar een andere winnaar.
            for (var y = 0; y < winners.length; y++) {
                // Nakijken als de geslecteerde winnaar al in de lijst zit.
                if (winners[y] == peopleReacted[random]) {
                    // We zetten i 1 minder zodat we opnieuw kunnen doorgaan in de lijst.
                    i--;
                    // We zetten dit op true zodat we weten dat deze al in de lijst zit.
                    inList = true;
                    break;
                }
            }
 
            // Zit deze niet in de lijst gaan we deze toevoegen.
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        // Voor iedere winnaar gaan we een bericht sturen.
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Congratulations " + winners[i] + `! You have won **${item}**.`);
        }
 
    }, 1000 * time);
 
 
}
}
