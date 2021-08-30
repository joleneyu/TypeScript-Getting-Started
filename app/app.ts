function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue("playername");
    
    logPlayer(playerName);
    
    // postScore(-5, playerName);
    postScore(80, 'Jingran');

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting a new game...';
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

// let elementID: HTMLElement | null = document.getElementById('playername');

function getInputValue (elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

function postScore (score: number = 100, playerName: string = 'MultiMath Player'): void {
    let logger: (value: string) => void;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    logger(`score: ${score}`);


    const scoreElment: HTMLElement | null = document.getElementById('postedScores');
    scoreElment!.innerText = `${score} - ${playerName}`;
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}
document.getElementById('startGame')!.addEventListener('click', startGame);