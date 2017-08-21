"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.searchSucursal_City = (sender, values) => {        
    messenger.send({text: `Sucursales en ${values[1]}`}, sender);        
    salesforce.findSucursal({BillingCity: values[1]}).then(sucursal => {               
        messenger.send(formatter.formatSucursal(sucursal), sender);        
    });
};

exports.searchHouse = (sender) => {
    messenger.send({text: `No estes chingando...`}, sender);
    salesforce.findProperties().then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};

exports.searchHouse_City = (sender, values) => {
    messenger.send({text: `OK, Buscando casas en ${values[1]}`}, sender);
    salesforce.findProperties({city: values[1]}).then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};

exports.searchHouse_Bedrooms_City_Range = (sender, values) => {
    messenger.send({text: `OK, looking for ${values[1]} bedrooms in ${values[2]} between ${values[3]} and ${values[4]}`}, sender);
    salesforce.findProperties({bedrooms: values[1], city: values[2]}).then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};

exports.searchHouse_Bedrooms_City = (sender, values) => {
    messenger.send({text: `OK, looking for ${values[1]} bedroom houses in ${values[2]}`}, sender);
    salesforce.findProperties({bedrooms: values[1], city: values[2]}).then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};

exports.searchHouse_Bedrooms = (sender, values) => {
    messenger.send({text: `OK, looking for ${values[1]} bedrooms`}, sender);
    salesforce.findProperties({bedrooms: values[1]}).then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};

exports.searchHouse_Range = (sender, values) => {
    messenger.send({text: `OK, looking for houses between ${values[1]} and ${values[2]}`}, sender);
    salesforce.findProperties({priceMin: values[1], priceMax: values[2]}).then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};

exports.priceChanges = (sender, values) => {
    messenger.send({text: `OK, looking for recent price changes...`}, sender);
    salesforce.findPriceChanges().then(priceChanges => {
        messenger.send(formatter.formatPriceChanges(priceChanges), sender);
    });
};

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "Find houses in Boston", "3 bedrooms in Boston", "3 bedrooms in Boston between 500000 and 750000", "show me price changes"`}, sender);
};

exports.hola = (sender) => {   
    messenger.getUserInfo(sender).then(response => {        
        messenger.send({text: `Hola, ${response.first_name}!`}, sender);    
    });
};

exports.queja = (sender, values) => { 
    messenger.getUserInfo(sender).then(response => { 
        salesforce.createCase2(response.first_name + " " + response.first_name, sender).then(() => { 
            messenger.send({text: `Gracias, ${response.first_name}. Una queja ha sido creada.`}, sender); 
        }); 
    }); 
};

exports.queja_mensaje = (sender, values) => { 
    messenger.getUserInfo(sender).then(response => { 
        salesforce.createCase3(${values}, response.first_name + " " + response.first_name, sender).then(() => { 
            messenger.send({text: `Gracias, ${response.first_name}. Una queja ha sido creada.`}, sender); 
        }); 
    }); 
};
