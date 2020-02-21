const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "github_username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "project_name",
        message: "What is your project's name?"
      },
      {
        type: "list",
        name: "licenses",
        change: ["ISC", "MIT", "BSD"]
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }

];

function writeToFile(fileName, data) {
}

function init() {

inquirer.prompt(questions).then(function(answers) {
    console.log(answers);

    const { github_username, } = answers;
    console.log(github_username);

});

}

init();
