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
    messenger.send({text: `You can ask me questions like "Survey Ticket 1234", "Ticket 1234"`}, sender);
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
