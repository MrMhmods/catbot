const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});




client.on('message', message => {

  if (message.content === prefix + 'cat') {

    message.react(`🐈`)

      message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "mystery-cat.png")

  }

});





var id = ['526702104849678340'] //تذكر إذا كنت تبي تضيف شخص معاك حط فاصله وبعدين العلامه '

var initcmd = '$'

const developers = id

const adminprefix = initcmd;

client.on('message', message => {

    var argresult = message.content.split(' ').slice(2).join(" ")

      if (!developers.includes(message.author.id)) return;

      

  if (message.content.startsWith(adminprefix + 'bply')) {

    if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

    client.user.setGame(argresult);

      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"

   + `${argresult}` + "``**")

  } else 

  if (message.content.startsWith(adminprefix + 'bwat')) {

        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"

   + `${argresult}` + "``**")

  } else 

  if (message.content.startsWith(adminprefix + 'blis')) {

        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"

   + `${argresult}` + "``**")

  } else 

  if (message.content.startsWith(adminprefix + 'bstream')) {

        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

    client.user.setGame(argresult, "https://www.twitch.tv/fadi_games2");

      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"

   + `${argresult}` + "``**")

  }

  if (message.content.startsWith(adminprefix + 'busername')) {

        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setUsername(argresult).then

      message.channel.send(`Changing The Name To ..**${argresult}** `)

} else

if (message.content.startsWith(adminprefix + 'bavatar')) {

      if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setAvatar(argresult);

    message.channel.send(`Changing The Avatar To :**${argresult}** `);

}

});





﻿﻿client.on("message", message => {

if(message.content.startsWith(prefix + "avatar")){

if(message.author.bot || message.channel.type == "dm") return;

var args = message.content.split(" ")[1];

var avt = args || message.author.id;

client.fetchUser(avt) 

.then((user) => {

avt = user

let avtEmbed = new Discord.RichEmbed()

.setColor("#36393e")

.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)

.setImage(avt.avatarURL)

.setFooter(`Mr_mhmods.`, message.client.user.avatarURL);

message.channel.send(avtEmbed);

})

.catch(() => message.channel.send(`Error`));

} // Julian

}); // Codes - Toxic Codes





var prefix = "$";

client.on("message", async message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.author.id != "401406828820299777") return;

    if(message.author.bot) return;

    if (command == "leave") {

        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);

        let GuildId = client.guilds.get(args[0])

        if(!GuildId) return message.reply(`** Guild ID is not Detected**`);

        GuildId.leave().then(m => message.channel.send("**I have Left "+GuildId.name+" ✅**"))

    }     

})






client.on('message', message => {

  const aa = message.content.split(" ").slice(1).join(" ");

  if(message.content.startsWith(prefix + "skin")){

    if(!aa) return message.reply(`❌  -  **${prefix}skin <name>**`);

    var ss = new Discord.RichEmbed()

    .setTitle(`${aa}'s Skin!`)

    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)

    .setThumbnail(`https://minotar.net/avatar/${aa}`)

    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)

    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(ss);

  }

});









client.on('message', message => {

  if(message.content === prefix + "user"){

    var embed = new Discord.RichEmbed()

    .setTitle(message.author.tag, message.author.avatarURL)

    .addField(`User`, message.author.username)

    .addField(`Discrim`,`#`+ message.author.discriminator)

    .addField(`Name Color Role`, message.member.colorRole)

    .addField(`Game`,message.author.presence.game ||"Idle.")

    .addField(`Status`,message.author.presence.status)

    message.channel.send(embed);

  }

});







client.on("message", message => {

  var prefix = "$";

  if(message.content.startsWith(prefix + "embed")) {

    

var color = message.content.split(" ")[1];

  var text = message.content.split(" ").slice(2);

    var tt = text.join(" ")

  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");

    if(!tt) return message.reply("يجب كتابة كلام لتكراره");

  let embed = new Discord.RichEmbed()

  .setColor(color)

  .setDescription(tt)

  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);

message.channel.send("`Error`:" + Julian)

    })

  }

  });





client.on("message", message => { //iTzMurtaja#8951

  if(message.content.toLowerCase().includes("giveaway")) { //iTzMurtaja#8951

    if(message.author.id == "595972345722568715" || message.author.id == "294882584201003009") { //iTzMurtaja#8951

      message.react("🎉") //iTzMurtaja#8951

    } //iTzMurtaja#8951 

  } //iTzMurtaja#8951

}) //iTzMurtaja#8951





client.on('message', message => {

    if (message.author.bot) return;

    if (message.content.startsWith("$say")) {

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You dont have** `ADMINISTRATOR` **permission**');

var args = message.content.trim().split(/ +/g).slice(1);

let cname = args[0];

let chan = message.guild.channels.find(element => element.name === cname);

if (chan) {

    let text = args.slice(1).join(" ");

    message.delete();

    chan.send(text);

} else {

    let text = args.join(" ");

    message.delete();

    message.channel.send(text);

   }

}

});







client.login('NTk1OTcyMzQ1NzIyNTY4NzE1.XSOsug.BvZf3NFw29LoqNG2krvFOKQMez0');
