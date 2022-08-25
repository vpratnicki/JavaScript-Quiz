var startContainer = document.querySelector(".start");
var quizContainer = document.querySelector(".quiz");

var startButton = document.querySelector(".start-button");


// questions and anwsers
var questions = [{
    id: 0,
    question: "Commonly used data types DO NO include.",
    options: [{ text: "strings", isCorrect: false },
    { text: "booleans", isCorrect: false },
    { text: "alerts", isCorrect: true },
    { text: "numbers", isCorrect: false }
    ]
}
// {
//     question: "The condition in an if/else statement is enclosed within ___.",
//     options: [{ text: "quotes", isCorrect: false },
//     { text: "curly brackets", isCorrect: false },
//     { text: "parentheses", isCorrect: true },
//     { text: "square brackets", isCorrect: false }
//     ]
// },
// {
//     question: "Arrays in JavaScript can be used to store ___.",
//     options: [{ text: "numbers and strings", isCorrect: false },
//     { text: "other arrays", isCorrect: false },
//     { text: "booleans", isCorrect: false },
//     { text: "all of the above", isCorrect: true }
//     ]
// },
// {
//     question: "String values must be enclosed within ___ when beging assigned to variables.",
//     options: [{ text: "commas", isCorrect: false },
//     { text: "curly brackets", isCorrect: false },
//     { text: "quotes", isCorrect: true },
//     { text: "parentheses", isCorrect: false }
//     ]
// },
// {
//     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//     options: [{ text: "JavaScript", isCorrect: false },
//     { text: "terminal/bash", isCorrect: false },
//     { text: "for loops", isCorrect: false },
//     { text: "console.log", isCorrect: true }]
// }
]

// Start quiz function
function startQuiz(event) {
    event.preventDefault();
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
}

startButton.addEventListener("click", startQuiz);


//Get question elements to appear on page

// Iterate
// function iterate(id) {
  
    // Getting the result display section
    // var result = document.getElementsByClassName(".result");
    // result[1].innerText = "";

// Getting the question
    // var quizContainer = document.getElementById("#quiz");
  
  
    // Setting the question text
    quizContainer.innerText = questions.question;
  
    // Getting the options
    var op1 = document.getElementById('#op1');
    var op2 = document.getElementById('#op2');
    var op3 = document.getElementById('#op3');
    var op4 = document.getElementById('#op4');
  
  
    // Providing option text 
    op1.innerText = questions.options[0].text;
    op2.innerText = questions.options[1].text;
    op3.innerText = questions.options[2].text;
    op4.innerText = questions.options[3].text;
  
    // Providing the true or false value to the options
    op1.value = questions.options[0].isCorrect;
    op2.value = questions.options[1].isCorrect;
    op3.value = questions.options[2].isCorrect;
    op4.value = questions.options[3].isCorrect;
  









// var ol = document.createElement("ol");

// for (let i of questions.options) { 
//     let li = document.createElement("li"); 
//     li.innerHTML = i; 
//     ol.appendChild(li); 
// }
// document.getElementById("quiz").appendChild(ol);



// var questionEl = document.createElement("h3");
// var optionsEl = document.createElement("ul");
// var listItem = document.createElement('li'),


// optionsEl.appendChild(listItem);



// indexOf()

// create elements for question 1
// var h1El = document.createElement("h1");
// var paraEl = document.createElement("p");
// var q1A1El = document.createElement("button");
// var q1A2El = document.createElement("button");
// var q1A3El = document.createElement("button");
// var q1A4El = document.createElement("button");

// provide the content for question 1
// h1El.textContent = "Question 1:";
// paraEl.textContent = "Commonly used data types DO NOT include:";
// q1A1El.textContent = "1. strings";
// q1A2El.textContent = "2. booleans";
// q1A3El.textContent = "3. alerts";
// q1A4El.textContent = "4. numbers";


// append to question container on page (question 1)
// document.getElementById("question-container").appendChild(h1El);
// document.getElementById("question-container").appendChild(paraEl);
// document.getElementById("question-container").appendChild(q1A1El);
// document.getElementById("question-container").appendChild(q1A2El);
// document.getElementById("question-container").appendChild(q1A3El);
// document.getElementById("question-container").appendChild(q1A4El);


// for each option 
// create some sort of button el that can hold an option
// give it any attr that are most godderist /*value of choice*/
// add an event listener that eval if the choice was correct
// add the button(or input whatever) to the question container

// add the first container

// document.querySelector(q1A1El).addEventListener('click', evaluateAnswer)

// function evaluateAnswer(event) {
//     if {

//     }

// console.log(event);
    // find out what question is on the screen

    // find out what answer is for that question

    // find out what button was clicked

    // determine if they were correct
    // penalty or points ( come back to this)

    // remove the current container
    // add the next container
    // if thats the last question do the hi score thing
// }


// let value = { tutor: "byron"};
// value = JSON.stringify(value);
// localStorage.setItem("key", value)

// let item = localStorage.getItem("key");
// item = JSON.parse(item);


