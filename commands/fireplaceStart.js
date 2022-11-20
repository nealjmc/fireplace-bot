const { SlashCommandBuilder, Embed, EmbedBuilder } = require('discord.js')

/**
 *
 * @param {import('discord.js').Interaction} interaction
 */
async function StartFireplace(interaction) {
	let fireplaceEmbed = new EmbedBuilder()
		.setColor('Orange')
		.setTitle('Ahhh, warmth :fire:')
		.setDescription('The fireplace has been lit, time to relax')
	await interaction.reply({ embeds: [fireplaceEmbed] })
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ignite')
		.setDescription('Light the fireplace and hang w/ Wumpus'),
	async execute(interaction) {
		await StartFireplace(interaction)
	},
}
