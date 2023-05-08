let num = Math.random() * 100; // Generate a random number between 1 and the user's input.
let roundNum = Math.round(num);

function guessNum(){ // The program should prompt the user to enter a number to be guessed.
	for(x = 1; x == x; x++){ // The user will have to guess the number within a certain number of tries.
	userInput = prompt(`Guess a number between 1 and 100:`)
	if (userInput < roundNum && userInput < 100 && userInput > 1){ // The program should use a loop to allow the user to guess the number.
		alert("Too low! Guess again.")
	}
	else if(userInput > roundNum && userInput < 100 && userInput > 1){
		alert("Too high! Guess again.")
	}
	else if(userInput < 1 || userInput > 100){
		alert("Please enter a number between 1 and 100!")
	}
	else{
		alert(`Congratulations! you guessed the number in ${x} tries!`)
		break;
	}
}
}
guessNum();



