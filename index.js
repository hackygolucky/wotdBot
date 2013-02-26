var channels = require('./channel')
	, irc = require('irc');

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

// Listen for joins
bot.addListener("join", function(channel, who) {
	// Welcome them in!
	bot.say(channel, who + "...welcome back!");
})

bot.addListener("message", function(from, to, text, message) {
	bot.say(from, "¿Que?");
})

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
	bot.say(config.channels[0], "¿Public que?");
})