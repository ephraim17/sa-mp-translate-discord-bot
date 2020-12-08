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
  var lang_to_urdu = '784146956884115456';
  var lang_to_chinese = '784146991893839933';
  var lang_to_hindi = '784147019118673980';


  client.on('message', msg => {

    if (msg.channel.id == lang_to_english && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to English');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-english', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data)
                console.log('Body: ', res.data.latinTranslatedMessage)
      
            
            body_data = JSON.stringify(res.data)     
                    
            const exampleEmbed = new Discord.MessageEmbed()	
            .setColor('#0099ff')
            // .setTitle('Your translated response')	
            .setAuthor('SA-MP Translate API', 'https://i.imgur.com/eN0S5Zc.png', 'https://sa-mp-translate.com')
            // .setDescription(body_data)
            .setThumbnail('https://i.imgur.com/eN0S5Zc.png')
            .setImage('https://i.imgur.com/eN0S5Zc.png')
            .addFields(
                { name: 'Your translated response', value: res.data.latinTranslatedMessage },
            )
            .addFields(
                { name: 'Your translated response in JSON', value: body_data },
            )
            
         .setFooter('Translations Powered by SA-MP Translate API');
            
                msg.channel.send(exampleEmbed);
            
            }).catch((err) => {
                console.error(err);
            });

        
    };

    if (msg.channel.id == lang_to_russian && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Russian');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-russian', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data)
                console.log('Body: ', res.data.latinTranslatedMessage)
      
            
            body_data = JSON.stringify(res.data)     
                    
            const exampleEmbed = new Discord.MessageEmbed()	
            .setColor('#0099ff')
            // .setTitle('Your translated response')	
            .setAuthor('SA-MP Translate API', 'https://i.imgur.com/eN0S5Zc.png', 'https://sa-mp-translate.com')
            // .setDescription(body_data)
            .setThumbnail('https://i.imgur.com/eN0S5Zc.png')
            .setImage('https://i.imgur.com/eN0S5Zc.png')
            .addFields(
                { name: 'Your translated response', value: res.data.latinTranslatedMessage },
            )
            .addFields(
                { name: 'Your translated response in JSON', value: body_data },
            )
            
            .setFooter('Translations Powered by SA-MP Translate API');
            
                msg.channel.send(exampleEmbed);
            
            }).catch((err) => {
                console.error(err);
            });

        
    };

    if (msg.channel.id == lang_to_spanish && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Spanish');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-spanish', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data)
                console.log('Body: ', res.data.latinTranslatedMessage)
      
            
            body_data = JSON.stringify(res.data)     
                    
            const exampleEmbed = new Discord.MessageEmbed()	
            .setColor('#0099ff')
            // .setTitle('Your translated response')	
            .setAuthor('SA-MP Translate API', 'https://i.imgur.com/eN0S5Zc.png', 'https://sa-mp-translate.com')
            // .setDescription(body_data)
            .setThumbnail('https://i.imgur.com/eN0S5Zc.png')
            .setImage('https://i.imgur.com/eN0S5Zc.png')
            .addFields(
                { name: 'Your translated response', value: res.data.latinTranslatedMessage },
            )
            .addFields(
                { name: 'Your translated response in JSON', value: body_data },
            )
            
            .setFooter('Translations Powered by SA-MP Translate API');
            
                msg.channel.send(exampleEmbed);
            
            }).catch((err) => {
                console.error(err);
            });

        
    };


    if (msg.channel.id == lang_to_urdu && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Russian');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-urdu', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data)
                console.log('Body: ', res.data.crylicTranslatedMessage)
      
            
            body_data = JSON.stringify(res.data)     
                    
            const exampleEmbed = new Discord.MessageEmbed()	
            .setColor('#0099ff')
            // .setTitle('Your translated response')	
            .setAuthor('SA-MP Translate API', 'https://i.imgur.com/eN0S5Zc.png', 'https://sa-mp-translate.com')
            // .setDescription(body_data)
            .setThumbnail('https://i.imgur.com/eN0S5Zc.png')
            .setImage('https://i.imgur.com/eN0S5Zc.png')
            .addFields(
                { name: 'Your translated response', value: res.data.crylicTranslatedMessage },
            )
            .addFields(
                { name: 'Your translated response in JSON', value: body_data },
            )
            
            .setFooter('Translations Powered by SA-MP Translate API');
            
                msg.channel.send(exampleEmbed);
            
            }).catch((err) => {
                console.error(err);
            });

        
    };

    if (msg.channel.id == lang_to_chinese && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Chinese');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);  
        
//             data = {
//             "message": msg.content
//         };
        
//         axios.post('https://samp-translate.herokuapp.com/lang-to-chinese', data)
//             .then((res) => {
//                 console.log(`Status: ${res.status}`);
//                 console.log('Body: ', res.data);

//             body_data = JSON.stringify(res.data)

            
//             const exampleEmbed = new Discord.MessageEmbed()	
//             .setColor('#0099ff')
//             .setTitle('POST https://samp-translate.heroukuapp.com/lang-to-chinese')	
//             .setDescription(body_data)
// //          .setFooter('Some footer text here');
            
//                 msg.channel.send(exampleEmbed);            

//             }).catch((err) => {
//                 console.error(err);
//             });
    };

    if (msg.channel.id == lang_to_hindi && msg.author != '769186526688313405'){

        console.log('Soemones trying to translate text to Hindi');
        console.log('content ' + msg.content);
        console.log('This person sent this msg ' + msg.author);

            data = {
            message: msg.content
        };
        
        axios.post('https://samp-translate.herokuapp.com/lang-to-hindi', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data)
                console.log('Body: ', res.data.crylicTranslatedMessage)
      
            
            body_data = JSON.stringify(res.data)     
                    
            const exampleEmbed = new Discord.MessageEmbed()	
            .setColor('#0099ff')
            // .setTitle('Your translated response')	
            .setAuthor('SA-MP Translate API', 'https://i.imgur.com/eN0S5Zc.png', 'https://sa-mp-translate.com')
            // .setDescription(body_data)
            .setThumbnail('https://i.imgur.com/eN0S5Zc.png')
            .setImage('https://i.imgur.com/eN0S5Zc.png')
            .addFields(
                { name: 'Your translated response', value: res.data.crylicTranslatedMessage },
            )
            .addFields(
                { name: 'Your translated response in JSON', value: body_data },
            )
            
            .setFooter('Translations Powered by SA-MP Translate API');
            
                msg.channel.send(exampleEmbed);
            
            }).catch((err) => {
                console.error(err);
            });

        
    };


            
});
        
client.login(process.env.BOT_TOKEN);
app.listen(process.env.PORT , () => console.log('Server started on ' + process.env.PORT ))
