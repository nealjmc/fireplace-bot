// Require the necessary discord.js classes
const fs = require('node:fs')
const path = require('node:path')
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')
const token = require('dotenv').config().parsed?.token

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()

const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)

	// set a new itme in the collection with the key as the command name
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	} else {
		console.warn(
			`[WARN] The command at ${filepath} is missing a required "data" or "execute" property.`
		)
	}
}

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.on(Events.InteractionCreate, async (interaction) => {
	// Is 'slash' command?
	if (!interaction.isChatInputCommand()) {
		return
	}

	// Get command
	const command = interaction.client.commands?.get(interaction.commandName)
	if (!command) {
		console.error(
			`No command matching ${interaction.commandName} was found.`
		)
		return
	}

	// Run the command
	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error)
		await interaction.reply({
			content: 'Therte was an error while executing this command',
		})
	}
})

client.login(token)
