const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTk1OTcyMzQ1NzIyNTY4NzE1.XSOsug.BvZf3NFw29LoqNG2krvFOKQMez0');
