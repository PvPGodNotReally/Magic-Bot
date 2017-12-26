// **************************** 
// copyright 2018
// 
// Discord: Brady#4847
//
// ****************************

const Discord = require('discord.js');
const fs = require("fs");
const db = require("quick.db");
const i = require("fs");

const TOKEN = "Mzk0NjExNTA0NzQ3MzgwNzM2.DSG2Hw.O7PPxgCwS3nZ7bWQ9ZKZYAQlQCw"
const PREFIX = "!";


var fortunes = [
    "**Yes**",
    "**No**",
    "**Maybe**",
    "absolutely **NOT**!",
    "Yes, **100%**"
];

var bot = new Discord.Client();


bot.on("ready", function() {
    console.log("Ready");
    console.log("Magic Bot is turned on and ready!")

    bot.user.setStatus("dnd");
    bot.user.setGame("Magic | Created by Brady#4847");

});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + " , Welcome to the discord!");

    member.addRole(member.guild.roles.find("name", "Member"));

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    


    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("A Public Bot created by `Brady#4847`");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Please Provide a question.");
            break;
        case "bots":
            var embed = new Discord.RichEmbed()
            .addField("Magic Bot", "Status - :white_check_mark: ",)
            .addField("RivalHQ Bot", "Status - :x:")
            .addField("Callums Bot", "Status - :white_check_mark:")
            .addBlankField()
            .addField("Statuses", "Online: :white_check_mark: Offline: :x:")
            .setColor(0x00ff00)
            .setFooter("MagicBot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        case "status":
            var embed = new Discord.RichEmbed()
            .addField("Code", "Status - :white_check_mark:")
            .addField("Host", "Status - :white_check_mark:")
            .addField("GitHub", "Status - :white_check_mark:")
            .addField("Website", "Status - :tools:")
            .addBlankField()
            .addField("Statuses", "Online: :white_check_mark: Offline: :x: Still in Development: :tools:")
            .setColor(0x00ff00)
            .setFooter("MagicBot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        case "comingsoonmusiccommand":
            var embed = new Discord.RichEmbed()
            .addField("Coming Soon!", "Music Commands Are Coming Soon!")
            .addBlankField()
            .setColor(0x00ff00)
            .setFooter("Magic Bot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        case "partners":
            var embed = new Discord.RichEmbed()
            .addField("PastelProxy's Discord", "https://discord.gg/rNZEhQV")
            .addField("RivalHQ", "RivalHQ Is no longer a thing and the bot is retired.")
            .addField("The Developers Discord", "https://discord.gg/DzctzCM")
            .addField("CallumGames", "https://discord.gg/K9Qaqku")
            .setColor(0x00ff00)
            .setFooter("MagicBot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        case "commands":
            var embed = new Discord.RichEmbed()
                .addField("!ping", "Pong!")
                .addField("!info", "So much information!")
                .addField("!8Ball", "Want to play some 8Ball?")
                .addField("!bots", "Want to see all of the bots that Brady has made? (Along with the Satuses")
                .addField("!status", "Want to check the status of the bot?")
                .addField("!developer", "Who is the developer?")
                .addField("!website", "Want to see the bots website?")
                .addField("!partners", "See all of our partners invites!")
                .setColor(0x00ff00)
                .setFooter("MagicBot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        case "developer":
            var embed = new Discord.RichEmbed()
            .addField("Who is the developer?", "The Developer of this bot is **Brady#4847**")
            .setColor(0x00ff00)
            .setFooter("MagicBot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        case "website":
            var embed = new Discord.RichEmbed()
            .addField("Website", "Coming Soon (**Still in Development**)")
            .setColor(0x00ff00)
            .setFooter("MagicBot | Version 0.0.01 (BETA) | Created By Brady#4847")
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid Command. Please try again! `use !commands for help`");
        }
    })

bot.login(TOKEN);