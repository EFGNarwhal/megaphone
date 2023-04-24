//made by Narwhal#9999

const { Client, Intents } = require('discord.js');
const fs = require('fs');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const sentMessages = new Set();

client.on('messageCreate', async (message) => {
  console.log(`Received message: ${message.content}`);

  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong!');
    return;
  }

  if (message.content === '!help') {
    const helpMessage = `**!send <#channel-name> <message>**: sends a message to that channel from the megaphone bot
**!ping**: pings the bot
**!info**: credits me (Narwhal#9999)
**!help**: shows this help message`;
    message.channel.send(helpMessage);
    return;
  }

  if (message.content === '!info') {
    const infoMessage = 'made by Narwhal#9999. feel free to contact me if you are having issues.';
    message.channel.send(infoMessage);
    return;
  }
	
  if (!message.content.startsWith('!send')) return;

  const args = message.content.slice(6).trim().split(' ');
  const targetChannel = args.shift().slice(2, -1);
  const messageContent = args.join(' ');

  console.log(`Target channel: ${targetChannel}`);
  console.log(`Message content: ${messageContent}`);

  if (!messageContent) {
    return message.reply('Error: message content is empty');
  }

  const channel = message.guild.channels.cache.find(
    (ch) => ch.id === targetChannel && ch.isText() && ch.guild === message.guild
  );

  if (!channel) {
    return message.reply(`Could not find channel the channel! Did you format your message properly?`);
  }

  if (sentMessages.has(messageContent)) {
    return message.reply(`Message "${messageContent}" already sent.`);
  }

  console.log(`Sending message to channel ${channel.name} in guild ${channel.guild.name}`);
  await channel.send(messageContent);

  sentMessages.add(messageContent);
});

fs.readFile('token.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading token.txt:', err);
    return;
  }

  client.login(data.trim());
});
