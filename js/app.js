'use strict';

console.log('hello');
 //Five questions with yes or no answers
 alert("Welcome to all about me!");
 let username = prompt("What is your name?");
 console.log("Question: What is your name? Response: " + username);
 let score = 0;
 let ques1 = prompt("Hi " + username + ", I'm going to ask you a series of yes or no questions. For each correct answer, you get one point. Are you ready?").toLowerCase();
 console.log("Question: Are you ready? Response: " + ques1);
 if(ques1 === 'yes' || livesInSeattle === 'y' ) {
  score = score + 1;
  console.log('Ok that was an easy one.');
 }

  //alert
 //let ques2 = prompt("Will I be a super awesome code fiend?").;
 //console.log("Question: Where are you? Response: " + whereyou);
 //let existential = prompt("How do you know that you even exist?")
 //console.log("Question: How do you know that you even exist? Response: " + existential);
 //alert("Subject " + username + " is under t
//let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase()

//if(livesInSeattle === 'yes' || livesInSeattle === 'y' ) {
//console.log('Yes I do live in Seattle')
//}
//else {
//  console.log('Sorry you are wrong, I do live in Seattle.')
//}