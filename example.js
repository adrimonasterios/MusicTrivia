let rl = require('readline-sync');

function computerChoiceFunction() {
		//Pick a random number from 0 to 3, 3 not included
		let randomNumFrom0to2 = Math.random() * 3;

		//Round down the randomNumFrom0to2
		let randomIndex = Math.floor(randomNumFrom0to2);

		//Select the element at randomIndex
		let computerChoice = ['r', 'p', 's'][randomIndex];

		return computerChoice;
}

function determineWinner(computerChoice, userChoice, score) {
	if(computerChoice === userChoice) {
		console.log('Draw!')
		console.log(score);
	} else if((computerChoice === 's' && userChoice === 'p') || (computerChoice === 'r' && userChoice === 's') || (computerChoice === 'p' && userChoice === 'r')) {
		score.computer++;
		console.log('You lose!')
		console.log(`Computer choice: ${computerChoice} User choice: ${userChoice}`);
		console.log(score);
	} else {
		score.user++;
		console.log('You win!');
		console.log(`Computer choice: ${computerChoice} User choice: ${userChoice}`);
		console.log(score);
	}
}

function game() {

	let score = {
		user: 0,
		computer: 0
	}

	let continuePlaying;

	do{
		console.log("Welcome to rock paper scissors!");

		//Ask the user to input her choice
		let userChoice = rl.question(`please select rock(r), scissors(s), paper(p)`);

		let computerChoice = computerChoiceFunction();

		determineWinner(computerChoice, userChoice, score);

		continuePlaying = rl.question('Continue playing? (y/n)');

	} while(continuePlaying === 'y');

	console.log('Goodbye! Thanks for playing!');
}

game();
