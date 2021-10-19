// (text: String) => Todo object
const makeTodo = (text) => {
  return {
    text: text,
    isComplete: false,
  }
}

module.exports = makeTodo;