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
