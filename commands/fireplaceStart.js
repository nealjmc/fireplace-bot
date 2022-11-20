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
		.setImage(
			'https://cdn.discordapp.com/attachments/1043937485606109296/1043938362840592454/fireplace.png'
		)
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
