const refreshBtn = document.querySelector('.container');
const dice = document.querySelector('.dice');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const diceImage = document.querySelector('img');
const btn__content = document.querySelector('.btn__content');



function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
};


function changeDice(className, number) {
    console.log("Random number:", number); // Debugging line
    if (number === 1) {
        className.src = 'images/dice1.png';
    }
    else if (number === 2) {
        className.src = 'images/dice2.png';
    }
    else if (number === 3) {
        className.src = 'images/dice3.png';
    }
    else if (number === 4) {
        className.src = 'images/dice4.png';
    }
    else if (number === 5) {
        className.src = 'images/dice5.png';
    }
    else if (number === 6) {
        className.src = 'images/dice6.png';
    }
};

refreshBtn.addEventListener('click', function () {
    let generatedNum1 = randomNum();
    let generatedNum2 = randomNum()

    changeDice(img1, generatedNum1);
    changeDice(img2, generatedNum2);

    if (generatedNum1 === generatedNum2) {
        btn__content.textContent = 'Draw! Click again!'
    }
    else if (generatedNum1 > generatedNum2) {
        btn__content.textContent = 'Player 1 won! Click again!'
    }
    else {
        btn__content.textContent = 'Player 2 won! Click again!'
    }

});