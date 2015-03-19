alert("Welcome to geography quiz")
//default value for score variable, with every new correct answer value will be higher for 1
var score = 0;
//these are my quiz question, toUpperCase are here to ensure even a lower case responses pass the tast

var question1 = prompt("What is the capital city of Croatia?");
if(question1.toUpperCase()==="ZAGREB") {
score+= 1;}

var question2 = prompt("What is the capital city of Italy?");
if(question2.toUpperCase()==="ROME"){
score += 1;}

var question3 = prompt("What is the capital city of Turkey?");
if(question3.toUpperCase()==="ANKARA"){
score += 1;}
var question4 = prompt("What is the capital city of Germany?");
if(question4.toUpperCase()==="BERLIN"){
score += 1;}
var question5 = prompt("What is the capital city of  Canada?");
if(question5.toUpperCase()==="OTTAWA"){
score += 1;}

// write this after the quiz is finished

document.write("You've got " + score + " correct answers out of five!");

// medals for everyone based of the no. of correct answers

if(score === 5){
    document.write(" You deserved gold medal");
} else if(score >=3){
    document.write(" Nice, you deserved silver medal");
} else if(score >=1) {
    document.write(" good, you deserved bronze medal this time");
} else {
    document.write(" Sorry, no medal for you, you need to learn more");
}
