require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');
const lopmon = new Client(
    {
        intents: [
            IntentsBitField.Flags.Guilds, 
            IntentsBitField.Flags.GuildMembers, 
            IntentsBitField.Flags.GuildMessages, 
            IntentsBitField.Flags.MessageContent,
        ],
    }
)

lopmon.on('ready', (c) => {
    console.log(`${c.user.tag} is ready for battle!`);
});

lopmon.on('messageCreate', (message) => {
    if (message.author.bot) //Prevents the bot from duplicating the message to itself
        return;
    if (message.content == 'I love you Lopmon')
        message.reply('I wuv you too! <3')
})

lopmon.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand)
        return;
    if (interaction.commandName === "greetings")
        interaction.reply("Hello!");
});

lopmon.login(process.env.TOKEN); 

