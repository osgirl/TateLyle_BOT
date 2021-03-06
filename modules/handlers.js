"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter'),
    postbacks = require('./postbacks');

let incNumb = [];

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "INC1234", "Location in United Kingdom" and "Locations"`}, sender);
};

exports.answerSurvey = (sender, values) => {        
    messenger.send({text: `INC${values[1]}`}, sender); 
    incNumb[0] = 'INC' + values[1];
    messenger.send(formatter.start_Question(), sender); 
};

exports.saveValues = (sender, values) => { 
    values[2] = incNumb[0];
    postbacks.actOptions(sender, values);
};

exports.serchLocation = (sender) => {
    messenger.send({text: `Locations:`}, sender);
    salesforce.findLocations().then(location => {               
        messenger.send(formatter.formatLocations(location), sender);        
    });
};

exports.serchEspLocation = (sender, values) => {
    messenger.send({text: `Locations in ${values[1]}`}, sender);
    salesforce.findLocationsEsp({city: values[1]}).then(location => {               
        messenger.send(formatter.formatLocations(location), sender);        
    });
};
