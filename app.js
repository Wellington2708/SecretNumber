let numberListSort = [];
let limitNumber = 10;
let secretNumber = numberRandom();
let attempts = 1;


function showScreen(tag, texto) {
    let element = document.querySelector(tag);
    element.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

showScreen("h1", "Jogo do número Secreto");
showScreen("p", "Escolha um número de 1 a 10");

function numberRandom() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let lengthElements = numberListSort.length;

    if (lengthElements == limitNumber) {
        numberListSort = [];

    }

    if (numberListSort.includes(chosenNumber)) {
        return numberRandom();
    } else {
        numberListSort.push(chosenNumber)
        return chosenNumber;
    }
}

function checkShoot() {
    let userNumber = document.querySelector("input").value;
    if (userNumber == secretNumber) {
        showScreen('h1', "Acertou!!");
        let wordAttempt = attempts == 1 ? 'tentativa' : 'tentativas'
        let message = `Parabéns, você descobriu o número secreto em ${attempts} ${wordAttempt}!`
        showScreen('p', message);
        let buttonNewGame = document.getElementById('reiniciar');
        buttonNewGame.removeAttribute('disabled');

    } else {
        if (userNumber > secretNumber) {
            showScreen("h1", "Jogo do número Secreto");
            showScreen('p', 'O número secreto é menor!');

        } else {
            showScreen("h1", "Jogo do número Secreto");
            showScreen('p', 'O número secreto é maior!');
        }
        attempts++;
        clearInput();
    }

}

function messageStart() {
    showScreen("h1", "Jogo do número Secreto");
    showScreen("p", "Escolha um número de 1 a 10");
}

messageStart();

function clearInput() {
    let userNumber = document.querySelector("input");
    userNumber.value = "";

}

function disabledNewGame() {
    let buttonNewGame = document.getElementById('reiniciar');
    buttonNewGame.setAttribute('disabled', true);
}

function restartGame() {
    secretNumber = numberRandom();
    clearInput();
    attempts = 1;
    messageStart()
    disabledNewGame();
}

