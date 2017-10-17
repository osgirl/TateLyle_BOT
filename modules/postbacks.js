"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

let global_variable = [];
let actOption = 0;
let questionNum = 0;
let addComments = 0;

exports.actOptions = (sender, values) => {
    if(actOption == 1){
        nextQuestion(sender, values);
    }
};

exports.start_quiz = (sender, values) => {
    messenger.send({text: "Answer the next questions..."}, sender);
    actOption = 1;
    questionNum = 1;
    messenger.send(formatter.TAL_Question_1(), sender);
};

exports.nextQuestion = (sender, values) => { 
    if(questionNum == 1){
        global_variable[1] = values[1];
        questionNum = 2;
        messenger.send(formatter.TAL_Question_2(), sender);
    } else if(questionNum == 2){
        global_variable[2] = values[1];
        questionNum = 3;
        messenger.send(formatter.TAL_Question_3(), sender);
    } else if(questionNum == 3){
        global_variable[3] = values[1];
        questionNum = 4;
        messenger.send(formatter.TAL_Question_4(), sender);
    } else if(questionNum == 4){
        global_variable[4] = values[1];
        questionNum = 5;
        messenger.send(formatter.TAL_Question_5(), sender);
    } else if(questionNum == 5){
	global_variable[5] = values[1];
        addComments = 1;
        messenger.send(formatter.end_Question(), sender);
    }
}

/*exports.quiz_1 = (sender, values) => { 
    global_variable[1] = values[1];
    questionNum = 2;
    messenger.send(formatter.TAL_Question_2(), sender);
};

exports.quiz_2 = (sender, values) => { 
    global_variable[2] = values[1];
    questionNum = 3;
    messenger.send(formatter.TAL_Question_3(), sender);
};

exports.quiz_3 = (sender, values) => { 
    global_variable[3] = values[1];
    questionNum = 4;
    messenger.send(formatter.TAL_Question_4(), sender);
};

exports.quiz_4 = (sender, values) => { 
    global_variable[4] = values[1];
    questionNum = 5;
    messenger.send(formatter.TAL_Question_5(), sender);
};

exports.quiz_5 = (sender, values) => { 
    global_variable[5] = values[1];
    addComments = 1;
    messenger.send(formatter.end_Question(), sender);
};*/

exports.quiz_6 = (sender) => { 
    messenger.send(formatter.add_Comments(), sender);
};

exports.end_quiz = (sender, values) => { 
    if(addComments == 1){
	global_variable[6] = values[1];  
    } 
    messenger.getUserInfo(sender).then(response => { 
        salesforce.createSurvey(global_variable, response.first_name + " " + response.last_name, sender, addComments).then(() => { 
	    if(addComments == 1){
	        messenger.send({text: `Thank you for answering our survey. Your comments are very much appreciated.`}, sender); 
		addComments = 0;
	    }
	}); 
    });
};
