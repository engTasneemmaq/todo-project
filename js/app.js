'use strict';

let answers =[];
let Q1 = askQuestion("is your a developer?", "Yes , No");
let Q2 = askQuestion("is your intersted with js course?", "Yes , No");
let Q3 = askQuestion("can understand everything?", "Yes , No");
answers = [Q1 , Q2 , Q3];
printAnswers(answers);

function askQuestion(question){
  let answer = prompt(question);
  return answer
}
function printAnswers(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] == null || array[i] === ""){
      console.log("is not valid");
    }
    
    else {
      console.log(array[i]);
    }

}
}


