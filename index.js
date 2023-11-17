// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { ifError } = require("assert");

// TODO: Create an array of questions for user input
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
    message: "What is the installation of your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributions",
    message: "What are the project contributions?",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test information:",
  },
  {
    type: "input",
    name: "license",
    message: "Please choose a license for this project:",
    choices: ("MIT", "Apache 2.0", "GNU", "Mozilla", "None"),
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Your Readme file was created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeSections = generateMarkdown(answers);
      writeToFile("README.md", readmeSections);
    })
    .catch.error((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
