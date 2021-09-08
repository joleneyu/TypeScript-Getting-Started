// /// <reference path="player.ts" />
// /// <reference path="result.ts" />
// /// <reference path="utility.ts" />




// function startGame() {
//     // starting a new game

//     let playerName: string | undefined = Utility.getInputValue("playername");
    
//     logPlayer(playerName);
    
//     // postScore(-5, playerName);
//     postScore(80, 'Jingran');

//     var messagesElement = document.getElementById('messages');
//     messagesElement!.innerText = 'Welcome to MultiMath! Starting a new game...';
// }

// function logPlayer(name: string = 'MultiMath Player'): void {
//     console.log(`New game starting for player: ${name}`);
// }

// // let elementID: HTMLElement | null = document.getElementById('playername');

// function postScore (score: number = 100, playerName: string = 'MultiMath Player'): void {
//     let logger: (value: string) => void;
//     if (score < 0) {
//         logger = logError;
//     }
//     else {
//         logger = logMessage;
//     }
//     logger(`score: ${score}`);


//     const scoreElment: HTMLElement | null = document.getElementById('postedScores');
//     scoreElment!.innerText = `${score} - ${playerName}`;
// }

// const logMessage = (message: string) => console.log(message);

// function logError(err: string): void {
//     console.error(err);
// }
// document.getElementById('startGame')!.addEventListener('click', startGame);

// // let myResult: Result = {
// //     playerName: 'Jingran',
// //     score: 5,
// //     problemCount: 5,
// //     factor: 7
// // };

// // let player: Person = {
// //     name: "Daniel",
// //     age: 32,
// //     formatName: () => "Dan", 
// // }

// const firstPlayer: Player = new Player();
// firstPlayer.name = "Lanier";
// console.log(firstPlayer.formatName());

/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue('playername');

  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});

