const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')
const editTodo = require('./editTodo')
const todos = require('./todos')

console.clear()
let response = readlineSync.question(getMenu()).toLowerCase()

while (response !== 'q') {
  if (isNaN(response) === false) {
    const todo = todos[response - 1]
    editTodo(todo);
  } else {
    console.log(chalk.red.bold(`${response} is not a valid input.`))
  }

  response = readlineSync.question(getMenu())
  console.clear()
}