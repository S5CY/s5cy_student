// AP CSP Quiz Game
// This program is designed to be simple and Create PT-friendly.
// It uses input, output, a list, and a student-developed function
// with a parameter, a loop, and an if statement.

// ==============================
// INPUT SETUP SECTION
// What this section does:
// - lets the user type answers in the terminal
// - uses Node's built-in readline so you do not need to install anything
// ==============================

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ==============================
// INPUT FUNCTION SECTION
// What this section does:
// - asks the user for input
// - returns what they typed
// ==============================

function askQuestion(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer.trim().toUpperCase());
    });
  });
}

// ==============================
// LIST SECTION
// What this section does:
// - stores the quiz questions in a list
// - each question has the question text, answer choices, correct answer,
//   and a short explanation for the final summary
// - this list helps manage complexity because all quiz data is stored together
// ==============================

const questions = [
  {
    question: "1. What is the main purpose of an algorithm?",
    choices: [
      "A. To store pictures and sound files",
      "B. To provide a step-by-step solution to a problem",
      "C. To connect a computer to the internet",
      "D. To compress data automatically"
    ],
    answer: "B",
    explanation: "An algorithm is a step-by-step process for solving a problem."
  },
  {
    question: "2. Which statement best describes lossless compression?",
    choices: [
      "A. It removes data permanently to make files smaller",
      "B. It only works on images",
      "C. It reduces file size without losing any original data",
      "D. It makes sound files louder"
    ],
    answer: "C",
    explanation: "Lossless compression keeps all original data, so the file can be restored exactly."
  },
  {
    question: "3. In AP CSP pseudocode, what does a selection statement do?",
    choices: [
      "A. Repeats instructions many times",
      "B. Stores values inside a list",
      "C. Displays output to the user",
      "D. Chooses between different actions based on a condition"
    ],
    answer: "D",
    explanation: "Selection uses conditions, usually with IF statements, to choose what code runs."
  },
  {
    question: "4. Which of the following is an example of iteration?",
    choices: [
      "A. A loop that repeats until all quiz questions are asked",
      "B. A variable storing one score",
      "C. A single print statement",
      "D. A comment explaining code"
    ],
    answer: "A",
    explanation: "Iteration means repeating steps, usually with a loop."
  },
  {
    question: "5. Why are lists useful in programming?",
    choices: [
      "A. They make computers run faster in every situation",
      "B. They allow many related values to be stored together",
      "C. They replace all functions",
      "D. They stop input from the user"
    ],
    answer: "B",
    explanation: "Lists help organize related data in one place."
  },
  {
    question: "6. What does an IF statement do?",
    choices: [
      "A. Repeats code forever",
      "B. Checks a condition and decides what happens next",
      "C. Creates a new internet connection",
      "D. Converts text into binary"
    ],
    answer: "B",
    explanation: "An IF statement checks whether a condition is true or false."
  },
  {
    question: "7. Which situation is an example of overflow?",
    choices: [
      "A. A variable stores a number larger than the maximum it can represent",
      "B. A list has more than two items",
      "C. A program uses a function with a parameter",
      "D. A file is compressed with no data loss"
    ],
    answer: "A",
    explanation: "Overflow happens when a value is too large to fit in the available storage space."
  },
  {
    question: "8. What is the role of a parameter in a function?",
    choices: [
      "A. It repeats the function automatically",
      "B. It allows information to be passed into the function",
      "C. It deletes variables",
      "D. It turns output into input"
    ],
    answer: "B",
    explanation: "A parameter lets a function receive information so it can work with different values."
  },
  {
    question: "9. Which of the following is most clearly an example of input?",
    choices: [
      "A. A score printed to the screen",
      "B. A list stored in memory",
      "C. A user typing an answer into the terminal",
      "D. A comment written by the programmer"
    ],
    answer: "C",
    explanation: "Input is information entered into the program by a user or device."
  },
  {
    question: "10. Why do programmers use procedures or functions?",
    choices: [
      "A. To make code reusable and organized",
      "B. To stop programs from needing variables",
      "C. To prevent user input",
      "D. To avoid all conditionals"
    ],
    answer: "A",
    explanation: "Functions help organize code and make repeated tasks easier to reuse."
  }
];

// ==============================
// OUTPUT SECTION
// What this section does:
// - shows the title and directions to the user
// ==============================

console.log("======================================");
console.log("        AP CSP Review Quiz Game       ");
console.log("======================================");
console.log("Type A, B, C, or D for each question.");
console.log("Your answers will be recorded.");
console.log("You only get one attempt for each question.");
console.log("");


async function runQuiz(questionList) {
  let score = 0;

  const recordedAnswers = [];

  // this is the outer loop. It goes through each question.
  // I know this because it says i<questionList.length, and so it will look at each question in the list.
  for (let i = 0; i < questionList.length; i++) {
    const currentQuestion = questionList[i];

    // currentQuestion.question - what does the . do? The . is used to get instance variables out of an object.
    // Basically, currentQuestion is a type of data that stores a question and a list of potential answers, as well as an answer choice.
    // To look at the question itself, we use someQuestion.question  
    // Again, the . gets stuff out of an object.
    console.log(currentQuestion.question);// this outputs the current question.
    for (let j = 0; j < currentQuestion.choices.length; j++) {
      console.log(currentQuestion.choices[j]);
    }

    let userAnswer = await askQuestion("Your answer: ");
    console.log("");
    typedInvalidInput = false
    gotCorrectAnswer = false
    if (
      userAnswer !== "A" &&
      userAnswer !== "B" &&
      userAnswer !== "C" &&
      userAnswer !== "D"
    ) {
      gotCorrectAnswer = false;
      typedInvalidInput = true;
      console.log("That was not A, B, C, or D, so it was recorded as incorrect.");
    }
    else if (userAnswer === currentQuestion.answer) {
        score++;
        gotCorrectAnswer = true;
        typedInvalidInput = false;
    } else {
        gotCorrectAnswer = false;
        typedInvalidInput = false;
    }

     recordedAnswers.push({
        number: i + 1,
        userAnswer: userAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect: gotCorrectAnswer,
        explanation: currentQuestion.explanation,
        wasInvalid: typedInvalidInput
      })

    console.log("Answer recorded.\n");
    
  }

  return { score, recordedAnswers };
}

// ==============================
// FINAL SUMMARY FUNCTION
// What this section does:
// - calculates the percentage
// - prints a performance message
// - shows question-by-question results at the end
// ==============================

function showFinalSummary(score, totalQuestions, recordedAnswers) {
  const percentage = ((score / totalQuestions) * 100).toFixed(0);

  console.log("======================================");
  console.log("            FINAL SUMMARY             ");
  console.log("======================================");
  console.log(`Score: ${score}/${totalQuestions}`);
  console.log(`Percentage: ${percentage}%`);

  if (percentage >= 90) {
    console.log("Performance: Excellent work! You are very ready.");
  } else if (percentage >= 70) {
    console.log("Performance: Good job! You know a lot, but a little review could help.");
  } else if (percentage >= 50) {
    console.log("Performance: Decent start. Keep practicing the concepts.");
  } else {
    console.log("Performance: Keep reviewing. More practice will help a lot.");
  }

  console.log("");
  console.log("Question Review:");

  for (let i = 0; i < recordedAnswers.length; i++) {
    const result = recordedAnswers[i];

    if (result.isCorrect) {
      console.log(
        `Question ${result.number}: Correct | Your answer: ${result.userAnswer} | Correct answer: ${result.correctAnswer}`
      );
    } else if (result.wasInvalid) {
      console.log(
        `Question ${result.number}: Incorrect | Your answer: ${result.userAnswer} (invalid input) | Correct answer: ${result.correctAnswer}`
      );
    } else {
      console.log(
        `Question ${result.number}: Incorrect | Your answer: ${result.userAnswer} | Correct answer: ${result.correctAnswer}`
      );
    }

    console.log(`Explanation: ${result.explanation}`);
    console.log("");
  }
}

// ==============================
// MAIN PROGRAM SECTION
// What this section does:
// - calls the quiz function
// - gets the returned score and recorded answers
// - displays the final summary
// - closes the input system at the end
// ==============================

async function main() {
  const results = await runQuiz(questions);
  // Here is where you CALLING showFinalSummary.
  // CALLING a function means to make the computer EXCUTE THE INSTRUCTIONS inside the function.
  // DEFINING a function is where you make a new function. 
  // My analogy: DEFINING a function is like writing a new recipe.
  //             CALLING a function is like telling the computer to cook the recipe for you.
  showFinalSummary(results.score, questions.length, results.recordedAnswers);
  rl.close();
}

main();