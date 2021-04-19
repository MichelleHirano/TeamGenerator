// requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");

//async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = "";

//Main function
async function main(){
    try{
        await prompt()

        for (let i = 0; i< teamArray.length; i++){
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHTML = html.generateHTML(teamString)
        console.log("Generating index.html file...");

        writeFileAsync("./dist/index.html", finalHTML);
        console.log("File created successfully");
    }
    catch(err){
        return console.log(err);
    }
}


// Inquirer prompts to collect user data
async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is employee's name?",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee's ID: ",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter employee's email address: "
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's position: ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's github username?: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // add to team Arr
                const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                teamArray.push(engineer);
            
            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's office number?: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // add to team Arr
                const manager = new Manager(response.name, response.id, response.email, response2.x);
                teamArray.push(manager);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What school is employee attending: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                // add to team Arr
                const intern = new Intern(response.name, response.id, response.email, response2.x);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (responseDone.finish === "Yes");
}

main();