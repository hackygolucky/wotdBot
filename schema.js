module.exports = {
	"properties": {
		"nick": {
				"description": "The nick of the bot used on the IRC server.",
				"type": "string",
				"required": true,
				"default": "PeeWeeBot"
		},
		"username": {
        "description": "The username of the bot used on the IRC server.",
        "type": "string",
        "required": true,
        "default": "NodeBot"            
    },
    "realname": {
        "description": "The realname of the bot used on the IRC server.",
        "type": "string",
        "required": true,
        "default": "Powered by Michael Owens"
    }, 
    "debug": {
        "description": "Should the debug logging be enabled?",
        "type": "boolean",
        "required": true,
        "default": false            
    },
    "channels": {
        "description": "An IRC channel the bot connects to.",
        "type": "array",
        "required": true,
        "default": ["NodeBot"]
    },
    "command": {
        "description": "the prefix for commands of this bot.",
        "type": "string",
        "required": true,
        "default": "."                        
    },                       
	}
}