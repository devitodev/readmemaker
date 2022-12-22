// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?',
      },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?',
      },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install your project\'s dependencies'
      },
    {
        type: 'input',
        name: 'utility',
        message: 'How is your app used?'
      },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be used to run tests?'
      },
    {
        type: 'input',
        name: 'contribute',
        message: 'How would you like users to contribute to this repo?'
      },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
      },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have?',
        choices: ['MIT','Apache 2.0','GPL 3.0','BSD 3','None']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),'/dist',fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
    writeToFile('README.md', generateMarkdown(responses))
    console.log('It worked!')
    })

}

// Function call to initialize app
init();
