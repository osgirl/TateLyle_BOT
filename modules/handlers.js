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
    messenger.send({text: `You can ask me questions like "INC1234", "Location in Europe" and "Locations"`}, sender);
};

exports.answerSurvey = (sender, values) => {        
    messenger.send({text: `INC${values[1]}`}, sender);  
    messenger.send(formatter.start_Question(), sender); 
};

exports.saveValues = (sender, values) => { 
    postbacks.actOptions(sender, values);
};

exports.serchLocation = (sender) => {
    messenger.send({text: `Locations:`}, sender);
};

exports.serchEspLocation = (sender, values) => {
    messenger.send({text: `Locations in ${values[1]}`}, sender);
};
