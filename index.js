const {Translate} = require('@google-cloud/translate').v2;
const Discord = require('discord.js');
const client = new Discord.Client();
var convert = require('cyrillic-to-latin')
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});



client.on('ready', () => {
    console.log(`Translater is in the builllllding!`);
  });

  //Channel ID's
  var russian_echo = '769193651782942730' //Source for Russian Text
  var english_echo = '459465868439584819' //Source for English Text

  client.on('message', msg => {

    if (msg.channel.id == english_echo){

        console.log('i came from echo')
        console.log('content ' + msg.content)
        console.log('Is this chat? ' + msg.content.includes(':keyboard:'))
        console.log('This person sent this msg ' + msg.author);

        //Check if the incoming message is someone sending a message to the chat

        if (msg.content.includes(':keyboard:')) {

            var original_msg = msg.content.replace(':keyboard:', '');

                    //Detect the language of the message  

                    const detectLanguage = async (text) => {  
                        try {
                            let response = await translate.detect(text);
                            return response[0].language;
                        } catch (error) {     
                            console.log(`Error at detectLanguage --> ${error}`);         
                            return 0;  
                        }
                    }
                    detectLanguage(original_msg)
                    .then((language) => {
                        console.log('What language is this '+ language);
                        if (language == 'en') {

                            //Translate the English messages to Russian

                            const translateText = async (text, targetLanguage) => {                    
            
                                try {                  
                                    let [response] = await translate.translate(text, targetLanguage);      

                                    return response;             
                 
                                } catch (error) {                                           
                                    console.log(`Error at translateText --> ${error}`);
                                    
                                    return 0;                                       
                                }            
                            };
               
                            translateText(msg.content, 'ru')
                            
                            //Send the translated message to the server  

                            .then((res) => {
                               console.log('this is result ' + res.replace(': keyboard:', ''));                              
                                var cyrillic_russian_chat = res.replace(': keyboard:', '');

                                // Convert the Cryllic Russian message to Latin
                                
                                var latin_russian_chat = convert(cyrillic_russian_chat);
                                
                                //client.channels.cache.get(english_echo).send('!s' + latin_russian_chat);      
                            })

                            .catch((err) => {   
                                console.log(err);
         
                            });
       
                            //end of send translation 
                        }
                    })
                    .catch((err) => {
                        console.log(error);  
                    });
                    //end of detect language 
                    //}
                }  
            } 
        });
        client.login(process.env.BOT_TOKEN);
