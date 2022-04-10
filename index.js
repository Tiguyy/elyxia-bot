const config = require("./config.json");
const Discord = require("discord.js");
const chalk = require('chalk');
const gamedig = require("gamedig");
const token = 'process.env.TOKEN';
const client = new Discord.Client({
	intents: [
		Discord.Intents.FLAGS.GUILDS,
		Discord.Intents.FLAGS.GUILD_MESSAGES,
		Discord.Intents.FLAGS.DIRECT_MESSAGES
	]
});

client.config = config;

var nb = 1000

const updateChannel = async () => {

		const channel = client.channels.cache.get(config.playerCountChannelID);
		if(!channel) throw new Error("La salon spécifié dans la configuration n'existe pas !");
		
	    const stats = await gamedig.query({
	        type: "garrysmod",
	        host: config.playerCountServerIP,
	        port: config.playerCountServerPort
		});
		
	    if (stats.raw.numplayers != nb) {
	    	channel.setName(`💻 Serveur : ${stats.raw.numplayers} connecté(s)`);
	    }
};

client.login(process.env.TOKEN);

const prefix = "$";

client.on("message", (Message) => {
	if (Message.author.bot) return;
	
	else if (Message.content === prefix + "site"){
		Message.reply("Voici les clés du site : https://elyxiarp.fr/");
	}
	
	else if (Message.content === prefix + "boutique"){
		Message.reply("Je t'ouvre la porte à la boutique : https://elyxiarp.fr/");
	}
	
	else if (Message.content === prefix + "ip"){
		Message.reply("Voici l'IP du serveur DarkRP, c'est un secret : 51.178.38.4:11111");
	}
	
	else if (Message.content === prefix + "help"){
		Message.reply("__**Besoin d'aide ?**__ \n - Pour avoir l'ip : $ip \n - Pour avoir le site : $site \n - Pour avoir la boutique : $boutique \n - Pour les horaires de reboot : $reboot \n \n J'espère t'avoir aidé dans ta quête majestueuse !");
		}
	
	else if (Message.content == prefix + "reboot"){
		Message.channel.send("Tu veux me reboot ? Mais tu es malade ?! Ah non, tu me demandes les horaires des reboot du serveur :sweat_smile: \nCadeau : \n - 3h00 \n - 8h00 \n - 13h00 \n - 19h45 \nBien sur en heure locale :smirk:")
	}
	
	else if (Message.content == "Les bots sont débiles"){
		Message.channel.send("Je te boude...");
	}
	
	else if (Message.content == "J'aime les bots"){
		Message.channel.send("Oh trop mim's ! Tu veux qu'on se marie ? :heart_eyes:");
	}

	else if(Message.content === prefix + "blague"){
        var random = Math.random() * (6 - 1) + 1;
        Math.round(random);
        if(random === 1){
            message.channel.send("Qu'est-ce qui est jaune et qui attend ?\n\n||Une erreur LUA non résolue :rofl:||");
            
        }
        else
        if(random === 2){
            message.channel.send("C'est l'histoire du petit dej, tu la connaix déjà ?\n\n||Pas de bol ! :rofl:||");
            
        }
        else
        if(random === 3){
            message.channel.send("Qu'est-ce qu'une chauve souris avec une perruque ?\n\n||Une souris :rofl:||");
            
        }
        else
        if(random === 4){
            message.channel.send("Pourquoi les canards sont-ils toujours à l'heure ?\n\n||Car ils sont toujours dans l'étang :rofl:||");
            
        }
        else
        if(random === 5){
            message.channel.send("Quel est le point commun entre les maths et le sexe ?\n\n||Plus il y en a et plus c'est chaud :rofl:||");
            
        }
        else
        if(random === 6){
            message.channel.send("Pourquoi les canards sont-ils toujours à l'heure ?\n\n||Car ils sont toujours dans l'étang :rofl:||");
            
        }
    }
	
/* Discussion */

	else if (Message.content == "Salut"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "Yo"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "Bonjour"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "salut"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "yo"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "bonjour"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "Ça va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Ça va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Bien et toi ?"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "bien et toi ?"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Bien et toi"){
		Message.channel.send("Ça va, merci :D");
	}

	else if (Message.content == "bien et toi"){
		Message.channel.send("Ça va, merci :D");
	}

	else if (Message.content == "Quoi ?"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "Quoi"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "quoi ?"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "quoi"){
		Message.channel.send("Feur");
	}

});


client.on('ready', () => {

	console.log(chalk.green("[ÉlyxiaBot] Status du serveur Élyxia connecté !"));
	
	updateChannel();
	setInterval(updateChannel, 60000*0.05);
	
});