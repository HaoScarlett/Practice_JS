// A poll has a question, an array of options from which people can choose,
// and an array with the number of replies for each option. This data is stored in the starter object below.

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.2. Based on the input number, update the answers array. For example, if the option is 3,
//          increase the value AT POSITION 3 of the array by 1. Check if the input is a valid number.
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  //   1. registerNewAnswer method
  registerNewAnswer() {
    // 1.1
    const inputNum = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n"Write option number"`
      )
    );
    //   Debugger
    //   console.log(inputNum);
    // 1.2 Check the input type and range
    if (typeof inputNum === 'number' && inputNum < this.options.length) {
      this.answers[inputNum]++;
    }
    // 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
    this.displayResults(this.answers);
  },
  // 3. Create a method 'displayResults' which displays the poll results.
  // The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
  // If type is 'array', simply display the results array as it is, using console.log(). (Default option)
  // If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

  displayResults(type) {
    if (typeof type === 'array') {
      console.log(type);
    } else if (typeof type === 'string') {
      console.log(`Poll results are ${type.join(',')}`);
    }
  },
};

// 2. Call this method whenever the user clicks the "Answer poll" button.
document.querySelector('.poll').addEventListener('click', function () {
  poll.registerNewAnswer.bind(poll);
});

//   Debugger
// poll.registerNewAnswer();
// console.log(poll.answers);
