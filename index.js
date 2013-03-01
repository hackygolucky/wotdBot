var irc = require('irc');

var config = {
	channels: ["#inane"],
	server: "irc.freenode.net",
	botName: "peeweebot"
};

// SET YOUR "WORD OF THE DAY!"
// var set_wotd = "look"
// 	, create_regex = ["/", set_wotd, "/i"]
// 	, wotd_regex = create_regex.join(""); // = /set_word/i

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

bot.addListener("join", function(channel, who) {
	bot.say(channel, who + " I know you are but what am I?");
})

bot.addListener('error', function(message) {
    console.log('error: ', message);
});

bot.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);

    if ( to.match(/^[#&]/) ) {
        // channel message
        if ( message.match(/look/)) {
            bot.say(to, 'You said the Secret Word! ' + from);
            setTimeout(function () { bot.say(to, "- - ^ - - - - - - - ^ - - - - - - ^ - - - - - - ^ - - - - - - - - ^ - - - - - - ^ - - - -") }, 500);
            setTimeout(function () { bot.say(to, "- - - - ^ - - - - - - - - - - - - - - - - ^ - - - - - - - - - - - - - - - ^ - - - - - - -") }, 1000);
            setTimeout(function () { bot.say(to, "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ !!!!! A-A-A-A-A-A-A!!!!! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~") }, 2500);
            setTimeout(function () { bot.say(to, "- - ^ - - - - - - - ^ - - - - - - - - - - - - -^- - - - - - - - ^ - - - - - - ^ - - - - -") }, 3000);
            setTimeout(function () { bot.say(to, "- - - - - - ^ - - - - - - - ^ - - - - - ^ - - - - - - - ^ - - - - - - ^ - - - - - - ^ - -") }, 3500);
            setTimeout(function () { bot.say(to, " http://youtu.be/AjCUXm4gq5E ") }, 4000);
        }
        if ( message.match(/dance!/) ) {
        		bot.say(to, 'Tequila! Da-dunh-Da-da-dunh-dunh-dunh-dunh...');
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D\\-<\u0001") }, 1000);
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D|-<\u0001")  }, 2000);
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D/-<\u0001")  }, 3000);
            setTimeout(function () { bot.say(to, "\u0001ACTION dances: :D|-<\u0001")  }, 4000);
        }
        // if ( message.match(/peeweebot/)) {
        // 	bot.say(to + " I know you are but what am I?");
        // }
    }
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