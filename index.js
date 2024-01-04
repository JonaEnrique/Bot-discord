const {Client, GatewayIntentBits, Partials, Collection}= require('discord.js');
const config = require('./config.json');

const client = new Client({

    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

client.setMaxListeners(0);


client.on('messageCreate', async(message) => {
    if(message.content === '!saludo'){
        return message.reply({content: 'Hola, como estas?'})
    }

    if(message.content === 'hola'){
        return message.reply({content: `Hola ${message.author}`})
    }
});

client.login(config.token).then(() => {
    console.log(`${client.user.tag} está online!`);
}).catch((err) => {
    console.log(err);
});