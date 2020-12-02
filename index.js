const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const express = require('express')
const app = express()
 



client.on('ready', () => {
    console.log(`Translater is in the builllllding!`);
  });

  //Channel ID's
  var lang_to_russian = '783245422676017173';  //Source for Russian Text
  var lang_to_english = '783148020019494962';  //Source for English Text
  var lang_to_spanish = '783143066747666472';


  client.on('message', msg => {

    if (msg.channel.id == lang_to_english){

        console.log('Soemones trying to translate text to English');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);
    
    };

    if (msg.channel.id == lang_to_russian){

        console.log('Soemones trying to translate text to Russian');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

    };

    if (msg.channel.id == lang_to_spanish){

        console.log('Soemones trying to translate text to Spanish');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);     
    }; 
    

        });
        client.login(process.env.BOT_TOKEN);

        app.listen(process.env.PORT , () => console.log('Server started on ' + process.env.PORT ))