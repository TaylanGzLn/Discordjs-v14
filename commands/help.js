const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle(`${client.user.username} Support Closed 👋`)
    .setDescription(`Hey **<@${message.author.id}>**, I'm <@${client.user.id}>!\n\nWe regret to announce that we **have stopped supporting Hawwo Music**, we did not want to give you such bad news, but unfortunately we have decided to close Hawwo Music with the decision of the Hawwo Team, we love you so much, take care.\n\n\`❓\`•Will It Reopen Hawwo Music\n- **We do not have such a thought at the moment, but why not in the future?**\n\n\`🌟\`•Please come to the Hawwo Music **Support Server** to be informed of any developments.\n\n`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#303136")
    .setTimestamp()
    .setFooter({text: `${message.author.tag} Endless Thanks for Supporting Us ❤️`, iconURL: message.author.displayAvatarURL({ dynamic: true })})

    const button = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setLabel("Support Server")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.gg/rWqdhKuJdN`));

    return message.channel.send({embeds : [embed], components: [button]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "help"
};