var irc = require('irc');

var config = {
	channels: ["#testingircbots"],
	server: "irc.freenode.net",
	botName: "peeweebot"
};

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

// Listen for joins
bot.addListener("join", function(channel, who) {
	// Welcome them in!
	bot.say(channel, who + "...welcome back!");
})

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
	bot.say(config.channels[0], "Whatchu talkin' bout?");
})