//declare the dependencies or modules needed for the assignment
const inquirer = require('inquirer');
const fs = require('fs');

//set inquirer to prompt for the initial information
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
            message: "Please enter a description of your project"
        },
        {
            type: "input",
            name: "instructions",
            message: "Please enter the instructions for using the application"
        },
        {
            type: "input",
            name: "usage",
            message: "type the path and filename for the screenshot/video"
        },
        {
            type: "input",
            name: "contributing",
            message: "What are the contribution guidelines?" 
        },
        {
            type: "input",
            name: "tests",
            message: "How can someone test your application?" 
        },
        {
            type: "checkbox",
            name: "license",
            message: "What licenses do you want to include?",
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause'] 
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub Username" 
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address" 
        }

        //after all questions have been answered, take the answers, and pass them through for more processing
    ]).then(answers => fs.writeFile('./readme.md', `# ${answers.projectName}
${answers.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
To install the needed dependencies, open the console and run the following:
${answers.instructions}
### Usage:
${answers.usage}
### License: 
This project is licensed with:
${answers.license}
### Contributing
${answers.contributing}
### Tests:
To test this application,, open the console and run the following:
--${answers.tests}--
### Questions:
email me: ${answers.email}
review my work: ${answers.username}
`, err => {
        if (err) throw err;
    })
    )
