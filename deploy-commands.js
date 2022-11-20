const { REST, Routes } = require('discord.js')
const { applicationId, token } = require('dotenv').config().parsed
const fs = require('node:fs')

const commands = []

// Get all command files from the command dir
const commandfiles = fs
	.readdirSync('./commands')
	.filter((file) => file.endsWith('.js'))

// Grab the SlashCommandBuilder#toJSON output of each command
for (const file of commandfiles) {
	const command = require(`./commands/${file}`)
	commands.push(command.data.toJSON())
}

// Deploy
;(async () => {
	// Create REST instance
	const rest = new REST({ version: 10 }).setToken(token)

	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`
		)

		// Use PUT to refresh all commands
		const data = await rest.put(Routes.applicationCommands(applicationId), {
			body: commands,
		})

		console.log(
			`Successfully reloaded ${data.length} application (/) commands.`
		)
	} catch (error) {
		// Cant forget this silly lil' guy
		console.error(error)
	}
})()
