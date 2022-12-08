const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

exports.run = async (client, message, args) => {
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: "Ping", iconURL: client.user.displayAvatarURL() })
    .setColor("#303136")
    .addFields([
    { name: "Bot Latency", value: `\`\`\`ini\n[ ${client.ws.ping}ms ]\n\`\`\``, inline: true }])
    .setTimestamp()
    .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true })})

    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};