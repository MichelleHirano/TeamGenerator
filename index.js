// requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Inquirer prompts
async function prompt{
    let responseDone = "";

    do{
        try{
            let response = await inquirer.prompt([
                //name
                {
                    type:"input",
                    name: "name",
                    message: "What is the employee's name?",
                    validate: function validateName(name){
                        return name !== "";
                    }
                },
                //id
                {
                    type:"input"
                }
            ])
        }
    }
}