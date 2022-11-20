const { SlashCommandBuilder, Embed, EmbedBuilder } = require('discord.js')

/**
 *
 * @param {import('discord.js').Interaction} interaction
 */
async function StartFireplace(interaction) {
	let fireplaceEmbed = new EmbedBuilder()
		.setColor('LightGrey')
		.setTitle('Well that was fun :crescent_moon:')
		.setDescription('Time to put the fireplace out for the night')
	// .setImage(
	// 	'https://cdn.discordapp.com/attachments/1043937485606109296/1043938362840592454/fireplace.png'
	// )
	await interaction.reply({ embeds: [fireplaceEmbed] })
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('extinguish')
		.setDescription('Put out the fireplace, and head to bed'),
	async execute(interaction) {
		await StartFireplace(interaction)
	},
}
