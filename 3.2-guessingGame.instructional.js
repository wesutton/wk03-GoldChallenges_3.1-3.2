// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

const randomNumber = Math.floor(Math.random() * 10) + 1
console.log('Random Number', randomNumber);

function checkGuess() {
    let myGuess = guess.value
    if (myGuess == randomNumber) {
        results.textContent = "Congratulations you are a Genius!"
    } else if (myGuess > randomNumber){
        results.textContent = "Sorry! " + myGuess + " is not right. Try a lower number."
    } else if (myGuess < randomNumber){
        results.textContent = myGuess + " is incorrect :( The number is higher."
    }
}
submitGuess.addEventListener('click', checkGuess);