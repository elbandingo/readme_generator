const inquirer = require('inquirer');
const fs = require('fs');

const userInput = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "what is the name of the project?"
        },
        {
            type: "input",
            name: "Author",
            message: "What is the name of the Author of this program?"
        },
        {
            type: "input",
            name: "description",
            
        }
    ])