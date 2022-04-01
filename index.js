const discord = require("discord.js");
const client = new discord.Client();
/* Import Discord Buttons Client */
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)



client.on("message", (message) => {
	if(message.content === "!apps") {
	/* Generate a Cute Embed :3 */
	 const embed = new discord.MessageEmbed()
	 .setTitle("APPLICATION HYDRO PVP")
	 .setThumbnail("https://cdn.discordapp.com/attachments/954375808930168852/957332417063055410/LOGO_HYDRO_PVP.png")
	 .setColor("#7d0e06");
 
    /* Generate 1st Button with "Yes" lable on it */
	 const button1 = new buttonClient.MessageButton()
	 .setLabel("💼 Manager")
	 .setURL("https://forms.gle/bZJ2YGFGJnVa2gFN6")


   /* Generate 2nd Button with "No" label on it */
	 const button2 = new buttonClient.MessageButton()
	 .setLabel("😈 Staff")
	 .setURL("https://forms.gle/eB7KQpgq6c8rZVVQ9")


   /* Generate 3rd Link Button */
   const button3 = new buttonClient.MessageButton()
   .setLabel("👾 Discord Helper")
   .setURL("https://forms.gle/zECwnxGWkrAgPvsh9")


     
     /* Send Message with button */
     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2], [button3] ]})
 }
})


/* Listen to buttons event with their ID */
/*buttonClient.on("yes", (inta) => inta.message.reply("Thanks, I love you :3"))
buttonClient.on("no", (inta) => inta.message.reply("WTF, you are the worst person, i have ever seen"))*/

client.login("OTU5MTM2Mjk0MDkxNTEzOTM3.YkXfSA.VF2C270xDAHCTQJ1YaEAMpFI6Eo")