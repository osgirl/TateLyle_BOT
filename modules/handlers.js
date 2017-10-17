"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter'),
    postbacks = require('./postbacks');

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "CSAT1234"`}, sender);
};

exports.answerSurvey = (sender, values) => {        
    messenger.send({text: `Survey for Ticket ${values[1]}`}, sender);  
    messenger.send(formatter.start_Question(), sender); 
};

exports.addCommentsText = (sender, values) => { 
    messenger.getUserInfo(sender).then(response => {
        postbacks.end_quiz(sender, values);
    });
};

exports.saveValues = (sender, values) => { 
    messenger.send({text: `Value ${values[1]}`}, sender);  
    if(postbacks.questionNum == 1){
        messenger.send({text: `Question 1`}, sender);  
    } else if(postbacks.questionNum == 2){
    }
};
