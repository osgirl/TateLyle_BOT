"use strict";

let moment = require("moment"),
    numeral = require("numeral");

/*exports.formatSucursal = sucursal => {    
    let elements = [];	
    sucursal.forEach(sucursal => {            
	    elements.push({                
                title: sucursal.get("Name"),                
                subtitle: `${sucursal.get("BillingCity")}, ${sucursal.get("BillingStreet")}`,
		"image_url": sucursal.get("HEB_Front_Picture__c"),
                "buttons":[{
                    "type":"web_url",
                    "url": sucursal.get("HEB_Location__c"),
                    "title":"View Location",
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

exports.formaProduct = product => {    
    let elements = [];	
    product.forEach(product => {            
	    elements.push({                
                title: product.get("Name"),                
                subtitle: `${product.get("Name")}`,
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
};//End HEB Code ************************** End HEB Code*/

exports.start_Question = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "Do you want answer some questions about our service?",
        "buttons": [ 
            { 
                "type": "postback", 
                "title": "Start Survey", 
                "payload": "start_quiz," + "Start Survey"
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

exports.TAL_Question_1 = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "How satisfied do you feel with the technical knowledge of those who fulfilled your request?",
        subtitle: "1=Lowest, 3=Highest",
        "buttons": [ 
            { 
                "type": "postback", 
                "title": "1", 
                "payload": "quiz_1," + "1"
            },
	    { 
                "type": "postback", 
                "title": "2", 
                "payload": "quiz_1," + "2"
            },
	    { 
                "type": "postback", 
                "title": "3", 
                "payload": "quiz_1," + "3"
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

exports.TAL_Question_2 = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "Overall satisfaction with support provided in relation to your request?",
        subtitle: "1=Lowest, 3=Highest",
        "buttons": [ 
            { 
                "type": "postback", 
                "title": "1", 
                "payload": "quiz_2," + "1"
            },
	    { 
                "type": "postback", 
                "title": "2", 
                "payload": "quiz_2," + "2"
            },
	    { 
                "type": "postback", 
                "title": "3", 
                "payload": "quiz_2," + "3"
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

exports.TAL_Question_3 = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "How satisfied do you feel with how quickly your request was resolved?",
        subtitle: "1=Lowest, 3=Highest",
        "buttons": [ 
            { 
                "type": "postback", 
                "title": "1", 
                "payload": "quiz_3," + "1"
            },
	    { 
                "type": "postback", 
                "title": "2", 
                "payload": "quiz_3," + "2"
            },
	    { 
                "type": "postback", 
                "title": "3", 
                "payload": "quiz_3," + "3"
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

exports.TAL_Question_4 = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "Do you feel your ticket was given the urgency and priority that was correct?",
        subtitle: "1=Lowest, 3=Highest",
        "buttons": [ 
            { 
                "type": "postback", 
                "title": "1", 
                "payload": "quiz_4," + "1"
            },
	    { 
                "type": "postback", 
                "title": "2", 
                "payload": "quiz_4," + "2"
            },
	    { 
                "type": "postback", 
                "title": "3", 
                "payload": "quiz_4," + "3"
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

exports.TAL_Question_5 = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "Please rate overall courtesy of the staff.",
        subtitle: "1=Lowest, 3=Highest",
        "buttons": [ 
            { 
                "type": "postback", 
                "title": "1", 
                "payload": "end_quiz," + "1"
            },
	    { 
                "type": "postback", 
                "title": "2", 
                "payload": "end_quiz," + "2"
            },
	    { 
                "type": "postback", 
                "title": "3", 
                "payload": "end_quiz," + "3"
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
};//End Tate And Lyle Code ************************** End Tate And Lyle Code*/
