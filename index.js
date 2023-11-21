// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const { ifError } = require("assert");

// Array of questions for user input
const questions = [
  /* Pass your questions in here */
  {
    type: "input",
    name: "title",
    message: "What is the title of your application repository?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a description of your project",
  },
  {
    type: "input",
    name: "table-content",
    message: "Please write a table of contents of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions on how to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide information on project usage:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide any information on contributing guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide tests description:",
  },
  {
    type: "list",
    name: "license",
    message: "Specify a license for this project:",
    choices: ["MIT", "Apache 2.0", "GNU", "Mozilla", "None"],
  },
  {
    type: "input",
    name: "author",
    message: "Please provide your name:",
  },
  {
    type: "input",
    name: "github-username",
    message: "Please provide your Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address:",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Your Readme file was created");
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
    //   console.log(answers);
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
