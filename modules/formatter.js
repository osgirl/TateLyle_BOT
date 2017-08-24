"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.formatProperties = properties => {
    let elements = [];
    properties.forEach(property => {
            elements.push({
                title: property.get("Title__c"),
                subtitle: `${property.get("Address__c")}, ${property.get("City__c")} ${property.get("State__c")} · ${numeral(property.get("Price__c")).format('$0,0')}`,
                "image_url": property.get("Picture__c"),
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Schedule visit",
                        "payload": "schedule_visit," + property.getId()
                    },
                    {
                        "type": "postback",
                        "title": "View broker info",
                        "payload": "contact_broker," + property.getId()
                    },
                    {
                        "type": "postback",
                        "title": "Contact me",
                        "payload": "contact_me," + property.getId()
                    }
                ]
            })
        }
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.formatPriceChanges = priceChanges => {
    let elements = [];
    priceChanges.forEach(priceChange => {
            let property = priceChange.get("Parent");
            elements.push({
                title: `${property.Address__c}, ${property.City__c} ${property.State__c}`,
                subtitle: `Old price: ${numeral(priceChange.get("OldValue")).format('$0,0')} · New price: ${numeral(priceChange.get("NewValue")).format('$0,0')} on ${moment(priceChange.get("CreatedDate")).format("MMM Do")}`,
                "image_url": property.Picture__c,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Schedule visit",
                        "payload": "schedule_visit," + property.Id
                    },
                    {
                        "type": "postback",
                        "title": "View broker info",
                        "payload": "contact_broker," + property.Id
                    },
                    {
                        "type": "postback",
                        "title": "Contact me",
                        "payload": "contact_me," + property.Id
                    }
                ]
            })
        }
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};


exports.formatAppointment = property => {
    var options = [
        moment().add(1, 'days').format('ddd MMM Do') + ' at 10am',
        moment().add(2, 'days').format('ddd MMM Do') + ' at 9am',
        moment().add(2, 'days').format('ddd MMM Do') + ' at 5pm',
        moment().add(3, 'days').format('ddd MMM Do') + ' at 1pm',
        moment().add(3, 'days').format('ddd MMM Do') + ' at 6pm',
    ];
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Select one of the available appointments below at ${property.get("Address__c")} in ${property.get("City__c")}.`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": options[0],
                        "payload": "confirm_visit," + property.get("Address__c") + " in " + property.get("City__c") + "," + options[0]
                    },
                    {
                        "type": "postback",
                        "title": options[1],
                        "payload": "confirm_visit," + property.get("Address__c") + " in " + property.get("City__c") + "," + options[1]
                    },
                    {
                        "type": "postback",
                        "title": options[2],
                        "payload": "confirm_visit," + property.get("Address__c") + " in " + property.get("City__c") + "," + options[2]
                    }]
            }
        }
    };
};

exports.formatBroker = broker => {
    let elements = [];
    elements.push({
        title: "Caroline Kingsley",
        subtitle: "Senior Broker  · 617-219-6363 · ckingsley@dreamhouse.com",
        "image_url": "https://s3-us-west-1.amazonaws.com/sfdc-demo/messenger/caroline_500x260.png",
        "buttons": [
            {
                "type": "postback",
                "title": "Contact Me",
                "payload": "contact_me"
            }]
    });
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.formatSucursal = sucursal => {    
    let elements = [];	
    sucursal.forEach(sucursal => {            
	    elements.push({                
                title: sucursal.get("Name"),                
                subtitle: `${sucursal.get("BillingCity")}, ${sucursal.get("BillingStreet")}`,
		"image_url": sucursal.get("HEB_Front_Picture__c"),
                "buttons":[{
                    "type":"web_url",
                    "url": sucursal.get("HEB_Location__c"),
                    "title":"View Ubication",
                    "webview_height_ratio": "compact"
                },
		{
                    "type": "postback",
                    "title": "Survey",
                    "payload": "contact_quiz," + sucursal.getId()
                }]
            })       
        }    
    );    
     return {        
         "attachment": {            
             "type": "template",            
             "payload": {                
                 "template_type": "generic",                
                 "elements": elements            
             }        
         }    
     };
};

exports.question_1 = sucursal => { 
    	let elements = []; 
	elements.push({ 
		title: "What do you think about our Customer Service?",
		subtitle: "1st Question",
		"buttons": [ 
			{ 
				"type": "postback", 
				 "title": "Good", 
				 "payload": "quiz_1," + "Good"
			},
			{ 
				"type": "postback", 
				 "title": "Regular", 
				 "payload": "quiz_1," + "Regular"
				},
			{ 
				"type": "postback", 
				 "title": "Bad", 
				 "payload": "quiz_1," + "Bad"
			}
		] 
    	}); 
    return { 
        "attachment": { 
             "type": "template", 
             "payload": { 
                "template_type": "generic", 
                "elements": elements 
            } 
        } 
    }; 
};

exports.question_2 = sucursal => { 
	let elements = []; 
	elements.push({ 
		title: "How do you rate our Store's costs?",
		subtitle: "2nd Question",
		"buttons": [ 
				{ 
					"type": "postback", 
					 "title": "High", 
					 "payload": "quiz_2," + "High"
				},
				{ 
					"type": "postback", 
					 "title": "Regular", 
					 "payload": "quiz_2," + "Regular"
				},
				{ 
					"type": "postback", 
					 "title": "Low", 
					 "payload": "quiz_2," + "Low"
				}
			]  
    }); 
    return { 
        "attachment": { 
             "type": "template", 
             "payload": { 
                "template_type": "generic", 
                "elements": elements 
            } 
        } 
    }; 
};

exports.question_3 = sucursal => { 
	let elements = []; 
	elements.push({ 
		title: "Will you continue visiting us for future purchases?",
		subtitle: "3rd Question",
		"buttons": [ 
				{ 
					"type": "postback", 
					 "title": "Yes", 
					 "payload": "quiz," + "Yes"
				},
				{ 
					"type": "postback", 
					 "title": "No", 
					 "payload": "quiz," + "No"
				}
			]  
    }); 
    return { 
        "attachment": { 
             "type": "template", 
             "payload": { 
                "template_type": "generic", 
                "elements": elements 
            } 
        } 
    }; 
};

