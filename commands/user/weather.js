
const Discord = require('discord.js');
const { gold } = require("../../colours.json")
const weather = require('weather-js');


module.exports = {
    config: {
        name: "weather",
        description: "Pulls the weather info of a town/city!",
        usage: "<town/state>",
        category: "user",
        accessableby: "Members",
        aliases: [""]
    },
    run: async (bot, message, args) => {

  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {

      if (err) message.channel.send(err);

      if (result === undefined || result.length === 0) {

          message.channel.send('**Please enter a location!**')

          return;

      }

      var current = result[0].current;

      var location = result[0].location;

      const embed = new Discord.RichEmbed()

          .setDescription(`**${current.skytext}**`)

          .setAuthor(`Weather for ${current.observationpoint}`)

          .setThumbnail(current.imageUrl)

          .setColor(gold)

          .addField('Timezone',`UTC${location.timezone}`, true)

          .addField('Degree Type',location.degreetype, true)

          .addField('Temperature',`${current.temperature} Degrees`, true)

          .addField('Feels Like', `${current.feelslike} Degrees`, true)

          .addField('Winds',current.winddisplay, true)

          .addField('Humidity', `${current.humidity}%`, true)

          message.channel.send({embed});

  })

}
}

