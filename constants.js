const { Client, GatewayIntentBits } = require('discord.js')
const discord = require('discord.js')


module.exports = Object.freeze({
    client: new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
});