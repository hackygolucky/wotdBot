var irc = require('irc');

// Can I remove this? Check to make sure I've required everything properly
var config = {
	channels: ["#testingircbots"],
	server: "irc.freenode.net",
	botName: "peeweebot"
};

// how to set the word of the day in IRC? 
var set_wotd = "hornswoggle"


///////////////////*** This is all fine and tested. 
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

bot.addListener('error', function(message) {
    console.log('error: ', message);
});
///////////////////*** This is all fine and tested. 

var create_regex = ["/", set_wotd, "/i"]
	, w_o_t_d = create_regex.join("");

bot.addListener(w_o_t_d, function(from, to, text, message) {
	bot.say(config.channels[0], "You said the Word of the Day!")
	// search channel for wotd
	// if wotd found, use 'target' as person to congratulate in ASCII art
	// 
})

// bot.prototype.onMessage = function(message) {
// 	// on typing setwotd 'word', should set wotd
// 	this."insert.method"('++ command: ' + msg.command);

// 	var message = msg
// 		, target = msg.arguments[0] // target
// 		, nick = (this.user(msg.prefix) || ' ').toLowerCase() // nick
// 		, user = this.users[nick] // user
// 		, command = msg.command // command
// 		, users = this.users;

// 	if (user) {
//                 user.update(msg.prefix);
//                 user.set_wotd(msg)
//             }

// 			this.emit('set Word of the Day', msg);
// 			break;

// 		case (command === 'SET_WOTD'):
// }
///////////////////////////////////////////////////////
// DOCS EXAMPLE CODE BELOW
// 'message'
// function (nick, to, text, message) { }

// Client.say(target, message)
// Sends a message to the specified target.
// 		target (string) – is either a nickname, or a channel.
// 		message (string) – the message to send to the target.

// Client.notice(target, message)
// Sends a notice to the specified target.	
// 		target (string) – is either a nickname, or a channel.
// 		message (string) – the message to send as a notice to the target.


// 'message[#][channel]'
// function (nick, to, text, message) { }

// Emitted when a message is sent. to can be either a nick (which is most likely 
// this clients nick and means a private message), or a channel (which means a 
// message to that channel). See the raw event for details on the message object.
// using 'message#channel' is messages sent to the specified channel, excluding PMs.


// For any commands that there aren’t methods for you can use the send() method
// which sends raw messages to the server:
// 								client.send('MODE', '#yourchannel', '+o', 'yournick');