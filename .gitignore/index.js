const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("/")

bot.on("ready", () =>{
    console.log("Spreman sam");
    bot.user.setGame("/asterixhelp");
});

bot.login(process.env.TOKEN);


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return; 

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
      case "pitanje":
      let args = message.content.split(" ").slice(1);
      let tte = args.join(" ")
      if (!tte){
          return message.reply("Molim vas postavite pitanje botu")};

          var replys = [
            "Ne mozes me preci",
            "Sta te briga",
            "Vucicu pederu",
            "Ja sam car",
            "Double pump je zivo sranje",
            "Kolko sam jadan",
            "Srecan rodjendan!"
        ];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var bembed = new Discord.RichEmbed()
        .setDescription("Zabava:Trebamo se zabavati")
        .addField("Pitanje",  tte)
        .addField("Odgovor",  reponse)
        message.delete(tte)
    message.channel.sendEmbed(bembed)
    break;
    case "predlog":  
        let xoargs = message.content.split(" ").slice(1);
        let xo03 = xoargs.join(" ")
        var xo02 = message.guild.channels.find('name', 'predlog');
        var embedglobal = new Discord.RichEmbed()
        .setColor("0x88CC14")
        .setTitle("Vas predlog je poslat.")
        .addField("Napisao", message.author)
        .addField("Predlog", xo03)
        .addField("Odgovor", "Vas odgovor je na cekanju")
        .addField("Admin & Asterix Nation", "<@515167453500669962>")
        .setTimestamp()
        message.delete(xo03)
     bot.channels.findAll('name', 'predlog').map(channel => channel.send(embedglobal))
           break;

}})

bot.on(`message`, message=> {

    if(message.content === prefix+ "asterixhelp"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#48A497")
        .setTitle("Asterix Nation - Help")
        .addField("/asterixhelp", "Kada napisete neke od nasig komanda, nas bot ce vam automatski odgovoriti nesto, ili uraditi ono sto se trazili.")
        .addField("Komande koje svi mogu koristiti", "/predlog  /pitanje  /asterixhelp")
        .addField("Objasnjenje komandi", "/predlog - Komanda kojom mozete pomoci serveru u daljem razvijanju, tako sto cete predloziti nesto. Sve sto trebate da uradite jeste da posle komande /predlog , napisite vas predlog.  /pitanje - Napisite neko pitanje botu, on ce vam dati odgovor na vase pitanje! Ovo sluzi cisto iz zabave! /asterixhelp - ova komanda")
       message.channel.sendMessage(help_embed);
       message.delete(prefix+ "asterixhelp")
       console.log("Jedan korisnik je koristio ovu komandu")
    }
});


    


      
