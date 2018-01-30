let score = 0;
let i = 0;
let value = '';

// Array of questions as an array of objects with three properties

let quizQs = [
  {
    _taskText: 'What is the capital of the USA?',
    _answerArray: ['Washington DC', 'New York', 'Atlanta', 'Los Angeles'],
    _correctAnswer: 1

  },

  {
    _taskText: 'Who was the first president of the US?',
    _answerArray: ['Jackson','Roosevelt','Washington','Lincoln'],
    _correctAnswer: 3
  }
]

window.onload = function() {
     what();
     function what(){
       for (let g=0; g<quizQs[i]._answerArray.length;g++) {
           let newElement = document.createElement ('LI');
           newElement.innerHTML = `<input type="radio" onclick="check()" name="radioButtonAnswers"
                                                          value="${quizQs[0]._answerArray[g]}">
                                                          <label>
                                                              ${quizQs[0]._answerArray[g]}
                                                         </label>`;
           let list = document.getElementById ('answerList');
           list.appendChild(newElement);
         }
   }
}

//Function that is called by clicking on the Start or Submit buttons

function displayQuestion() {
          if (i===quizQs.length){
                 getScore();
                 i=0;
                 let newButton = document.createElement('button');
                 let mainElement = document.getElementById ('mainElement');
                 newButton.innerHTML = `<button type="start" onclick="displayQuestion()">Start again!</button>`;
                 mainElement.appendChild(newButton);
               }
          else {
               isRightAnswer(i-1);
               if (i+1===quizQs.length){
                 document.getElementById('mainButton').textContent='Finish';
               }
               else {
                    document.getElementById('mainButton').textContent="Submit";
               }
               document.getElementById("answerList").innerHTML = ``;
               document.getElementById("mainElement").innerHTML = `<p>${quizQs[i]._taskText}</p>`;
               for (let g=0; g<quizQs[i]._answerArray.length;g++) {
               let newElement = document.createElement ('LI');
               newElement.innerHTML = `<input type="radio" onclick="check()" name="radioButtonAnswers"
                                                                value="${quizQs[i]._answerArray[g]}">
                                                                <label>
                                                                     ${quizQs[i]._answerArray[g]}
                                                                </label>`;
               let list = document.getElementById ('answerList');
               list.appendChild(newElement);
          }
                    i++;
                  }
        }

//Function that is called by clicking on the Add New Questions button

function addQuestions() {


};

//Checks which radiobutton was selected

function check() {
  let radios = document.getElementsByName('radioButtonAnswers');
      for (let k = 0; k < radios.length; k++) {
          if (radios[k].checked) {
          // get value, set checked flag or do whatever you need to
          value = radios[k].value;
          console.log(value);
}
}
}

/*Function that checks if any of the radiobuttons were chosen and if yes, checks
if the answer given is correct*/

function isRightAnswer(index) {
  check();
  console.log(index);
  if  (value != 0) {
       console.log(quizQs[index]._answerArray[quizQs[index]._correctAnswer-1]);
       if (value === quizQs[index]._answerArray[quizQs[index]._correctAnswer-1]) {
                    score++;
                    alert ('Correct!');
                 }
      else {
      alert ('Incorrect!');
       }
   }
   else if (index>=0){
     alert ('Please choose one of the answers!');
   }
}


//Function that gives a score

function getScore() {
     document.getElementById("mainElement").innerHTML = `You got ${score}/${quizQs.length} questions right!`;
}


function isSaved() {



}


function  checkPassword() {

}
