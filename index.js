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

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
