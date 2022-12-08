const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {

    const uptime = moment.duration(message.client.uptime).format("D[d], H[h], m[m], s[s]");
    
    const embed = new EmbedBuilder()
    .setAuthor({ name: "Uptime", iconURL: client.user.displayAvatarURL() })
    .setColor("#303136")
    .addFields([
    { name: "Uptime", value: `\`\`\`ini\n[ ${uptime} ]\n\`\`\``, inline: true }])
    .setTimestamp()
    .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true })})

    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "uptime"
};