// create elements for intro
var h1El = document.createElement("h1");
var paraEl = document.createElement("p");
var q1A1El = document.createElement("button");
var q1A2El = document.createElement("button");
var q1A3El = document.createElement("button");
var q1A4El = document.createElement("button");

// provide the content for intro
h1El.textContent = "Question 1:";
paraEl.textContent = "Commonly used data types DO NO include:";
// node = document.createTextNode("");
q1A1El.textContent = "1. strings";
q1A2El.textContent = "2. booleans";
q1A3El.textContent = "3. alerts";
q1A4El.textContent = "4. numbers";

// paraEl.appendChild(node);

// append to question container on page
document.getElementById("question-container").appendChild(h1El);
document.getElementById("question-container").appendChild(paraEl);
document.getElementById("question-container").appendChild(q1A1El);
document.getElementById("question-container").appendChild(q1A2El);
document.getElementById("question-container").appendChild(q1A3El);
document.getElementById("question-container").appendChild(q1A4El);


// for each question

// create the container el that hold the question and choices

// create the el that hold the question

// create the text node that is the question
// add the text node to the question el
// add any attr that you thing are good

// add the question el to the question container

// for each option 
// create some sort of button el that can hold an option
// give it any attr that are most godderist /*value of choice*/
// add an event listener that eval if the choice was correct
// add the button(or input whatever) to the question container

// add the first container

document.querySelector('#clickTest').addEventListener('click', evaluateAnswer)

function evaluateAnswer(event) {

    console.log(event);
    // find out what question is on the screen
    // find out what answer is for that question
    // find out what button was clicked

    // determine if they were correct
    // penalty or points ( come back to this)

    // remove the current container
    // add the next container
    // if thats the last question do the hi score thing
}


// let value = { tutor: "byron"};
// value = JSON.stringify(value);
// localStorage.setItem("key", value)

// let item = localStorage.getItem("key");
// item = JSON.parse(item);








// create elements for questions
var questionEl = document.createElement("div");
// Create ordered list element for answers
var listEl = document.createElement("ol");
// Create ordered list items for each possible answer
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

