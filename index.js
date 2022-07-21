const {client} = require("./constants");
const { token, guild_id, role_id, color_array } = require('./config.json')
const cron = require("node-cron");

let i = 0;

client.on('ready', msg => {
    nextColor()
    cron.schedule('0 * * * *', () => {
        nextColor()
    })
});


function nextColor() {
    const role = client.guilds.cache.get(guild_id).roles.cache.get(role_id)
    if(i < color_array.length){
        role.setColor(color_array[i]).then(console.log);
        i++;
    } else {
        i = 0;
        nextColor();
    }
}

client.login(token).then(console.log)