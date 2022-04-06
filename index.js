const config = require("./config.json");
const Discord = require("discord.js");
const chalk = require('chalk');
const gamedig = require("gamedig");
const token = 'process.env.TOKEN';
const client = new Discord.Client();

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

client.on('ready', () => {

	console.log(chalk.green("[ÉlyxiaBot] Status du serveur Élyxia connecté !"));
	
	updateChannel();
	setInterval(updateChannel, 60000*0.05);
	
});