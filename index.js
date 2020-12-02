const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const express = require('express')
const app = express()
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.on('ready', () => {
    console.log(`Translater is in the builllllding!`);
  });

  //Channel ID's
  var lang_to_russian = '783245422676017173';  //Source for Russian Text
  var lang_to_english = '783148020019494962';  //Source for English Text
  var lang_to_spanish = '783143066747666472';


  client.on('message', msg => {

    if (msg.channel.id == lang_to_english && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to English');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            playerid: '4',
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-english', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
                msg.channel.send('HI');
            }).catch((err) => {
                console.error(err);
            });
    
    };

    if (msg.channel.id == lang_to_russian && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Russian');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            playerid: '4',
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-russian', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
                msg.channel.send('HI');
            }).catch((err) => {
                console.error(err);
            });

        
    };

    if (msg.channel.id == lang_to_spanish && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Spanish');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);  
        
            data = {
            playerid: '4',
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-spanish', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
                msg.channel.send('HI');
            }).catch((err) => {
                console.error(err);
            });
    }; 
            
});
        
client.login(process.env.BOT_TOKEN);
app.listen(process.env.PORT , () => console.log('Server started on ' + process.env.PORT ))
