// 1) dynamic render 
// 2) check options 
// 3)total score check



const quiz = [
    {
        question: "What is the output of the following code?\n\nconsole.log(typeof null);",
        ans1: "null",
        ans2: "object",
        ans3: "undefined",
        ans4: "string",
        correctAns: "2"
    },
    {
        question: "How do you create a new array in JavaScript?",
        ans1: "var arr = ();",
        ans2: "var arr = [];",
        ans3: "var arr = new Array;",
        ans4: "var arr = new Array[];",
        correctAns: "2"
    },
    {
        question: "What is the purpose of the `map()` method in JavaScript?",
        ans1: "It creates a new array populated with the results of calling a provided function on every element in the calling array.",
        ans2: "It filters the elements of an array.",
        ans3: "It reduces the array to a single value.",
        ans4: "It sorts the elements of an array.",
        correctAns: "1"
    },
    {
        question: "What will the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);",
        ans1: "true",
        ans2: "false",
        ans3: "undefined",
        ans4: "NaN",
        correctAns: "2"
    },
    {
        question: "How do you add an element to the beginning of an array?",
        ans1: "array.push(element);",
        ans2: "array.pop(element);",
        ans3: "array.shift(element);",
        ans4: "array.unshift(element);",
        correctAns: "4"
    },
    {
        question: "What is the most used programming language in 2017?",
        ans1: "JavaScript",
        ans2: "Java",
        ans3: "C",
        ans4: "Python",
        correctAns: "1"
    },
    {
        question: "Which company developed JavaScript?",
        ans1: "Microsoft",
        ans2: "Sun Microsystems",
        ans3: "Oracle",
        ans4: "Netscape",
        correctAns: "4"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        ans1: "React",
        ans2: "Angular",
        ans3: "Django",
        ans4: "Vue",
        correctAns: "3"
    },
    {
        question: "What is the output of the following code?\n\nconsole.log([] + []);",
        ans1: "[]",
        ans2: "undefined",
        ans3: "empty string",
        ans4: "NaN",
        correctAns: "3"
    },
    {
        question: "How do you declare a JavaScript variable?",
        ans1: "var myVar;",
        ans2: "let myVar;",
        ans3: "const myVar;",
        ans4: "All of the above",
        correctAns: "4"
    }
];

const question = document.getElementById("quiz_Question");
console.log(question);

const option_a = document.getElementById("text-option-a");
const option_b = document.getElementById("text-option-b");
const option_c = document.getElementById("text-option-c");
const option_d = document.getElementById("text-option-d");
const answerElemnt = document.querySelectorAll(".answer")

console.log("option_C");
console.log("option_b");
console.log("option_c");
console.log("option_d");
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);


const submit = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
// console.log(answerElemnt.innerHTML);
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1)
console.log([currentQuestion].ans2);
console.log([currentQuestion].ans3);
console.log([currentQuestion].ans4);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].question;
option_b.textContent = quiz[currentQuestion].question;
option_c.textContent = quiz[currentQuestion].question;
option_d.textContent = quiz[currentQuestion].question;

submit.addEventListener("click", function () {
    const checkedAns = document.querySelector(`input[type="radio]:checked`);
    console.log(checkedAns);
    if (checkedAns === null) {
        alert("please select the answer")
    }
    else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
        checkedAns.checked = false;
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].question;
            option_b.textContent = quiz[currentQuestion].question;
            option_c.textContent = quiz[currentQuestion].question;
            option_d.textContent = quiz[currentQuestion].question;
            checkedAns.checked = false;
        } else {
            alert("Your score is " + score + quiz.length);
            location.reload();
        }
    
}

    })


