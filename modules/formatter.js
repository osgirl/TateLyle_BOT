"use strict";

let moment = require("moment"),
    numeral = require("numeral");

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
        subtitle: "1=Lowest, 5=Highest"
        /*"buttons": [ 
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
                "title": "5", 
                "payload": "quiz_1," + "5"
            }
        ] */   
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
        subtitle: "1=Lowest, 3=Highest"
        /*"buttons": [ 
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
        ]*/ 
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
        subtitle: "1=Lowest, 3=Highest"
        /*"buttons": [ 
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
        ]*/
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
        subtitle: "1=Lowest, 3=Highest"
        /*"buttons": [ 
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
        ]*/  
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
        subtitle: "1=Lowest, 3=Highest"
        /*"buttons": [ 
            { 
                "type": "postback", 
                "title": "1", 
                "payload": "quiz_5," + "1"
            },
	    { 
                "type": "postback", 
                "title": "2", 
                "payload": "quiz_5," + "2"
            },
	    { 
                "type": "postback", 
                "title": "3", 
                "payload": "quiz_5," + "3"
            }
        ]*/ 
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

exports.add_Comments = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "Add comments:",
	subtitle: "Add Com: before you write the commetns:"
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

exports.end_Question = sucursal => { 
    let elements = []; 
    elements.push({ 
        title: "Do you want do add comments?",
        "buttons": [ 
	    { 
	        "type": "postback", 
		"title": "Yes", 
		"payload": "quiz_6"
	    },
	    { 
		"type": "postback", 
		"title": "No", 
		"payload": "end_quiz," + "No Comments added"
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
