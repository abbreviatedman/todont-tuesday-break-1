const chalk = require('chalk')
const todos = require('./todos')

function getMenu () {
  const todoList = todos.map((todo, i) => {
    let symbol = '🆇'
    if (todo.isComplete) {
      symbol = '☑️'
    }

    return `${ i + 1 }. ${ symbol } ${ todo.text }`
  }).join('\n')

  const menu = `${chalk.blue.bold('Choose a todo to edit (by entering its number) or choose an option at the bottom (by letter):')}
${todoList}
(n) Add new todo.
(q) Quit
`

  return menu;
}

// our goal:
// 1. ☑️ Walk the dog.
// 2. 🆇 Do the dishes.
// 3. ☑️ Call the bank.
// 4. 🆇 Sign up for class.

module.exports = getMenu;
