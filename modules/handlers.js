"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

/*exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "H-E-B in Monterrey", "Stores in Monterrey"`}, sender);
};

exports.searchSucursal_City = (sender, values) => {        
    messenger.send({text: `Stores in ${values[1]}`}, sender);        
    salesforce.findSucursal({city: values[1]}).then(sucursal => {               
        messenger.send(formatter.formatSucursal(sucursal), sender);        
    });
}; 

exports.searchProducts_Offers = (sender) => {        
    messenger.send({text: `Products in Offer`}, sender);    
    salesforce.searchProducts().then(product => {               
        messenger.send(formatter.formatproduct(product), sender);        
    });
};//End HEB Code ************************** End HEB Code*/

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
    messenger.send(formatter.TAL_Question_1(values[1]), sender);        
};//End Tate And Lyle Code ************************** End Tate And Lyle Code*/

