console.log('tic tac toe running...');

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const img = new Image();
    // img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrbzFeQdSdjx_gnGYqA15GD9s57AYzsyJ5Q&s';
    img.src = 'https://previews.123rf.com/images/logvinyk/logvinyk1609/logvinyk160909533/65058430-tic-tac-toe-game-vector-icon-sign-seamless-pattern-on-a-gray-background-vector-illustration.jpg';
    img.onload = function() {
        body.style.backgroundImage = `url(${img.src})`;
    };
});
console.log('hiii');

const boxes = document.querySelectorAll('.box');
const btnn = document.getElementById('restart');
const resultDisplay = document.getElementById('result');


const put_x='x';
const put_o='o';
let A_turn;

const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

start()
btnn.addEventListener('click',start)

function start()
{
    A_turn=false;
    resultDisplay.style.display = 'none'; // Hide result display on start
    resultDisplay.textContent = '';
    boxes.forEach(element => {
        element.classList.remove(put_x);
        element.classList.remove(put_o);
        element.textContent="";
        element.removeEventListener('click',operate);
        element.addEventListener('click',operate, { once: true });

    });

}
function operate(e)
{
    const element=e.target;
    let turn=A_turn ?put_x :put_o;
    putXO(turn,element)
    if (isWinner(turn)) {
        setTimeout(() => stop(false), 0);
    } else if (isDraw()) {
        setTimeout(() => stop(true), 0);
    } else {
        change();
    }
}

function putXO(turn,element)
{
    element.classList.add(turn);
    element.textContent=turn;
}

function isWinner(turn)
{
    return possibilities.some(combination => {
        return combination.every(index => {
            return boxes[index].classList.contains(turn);
        });
    });
}
function change()
{
    A_turn=!A_turn;
}

function isDraw() {
    return [...boxes].every(element => {
        return element.classList.contains(put_x) || element.classList.contains(put_o);
    });
}

function stop(draw) {
    resultDisplay.style.display = 'block';
    resultDisplay.style.backgroundColor="white"; // Show result display
    if (draw) {
        resultDisplay.textContent = "Draw!";
    } else {
        resultDisplay.textContent = `${A_turn ? "X's" : "O's"} Wins!`;
    }
    setTimeout(start, 3000); // Restart the game after 1 second
}
const set = document.getElementById('set');
const btn = document.getElementById('rulesBtn');
const span = document.getElementsByClassName('close')[0];
btn.onclick = function() {
    set.style.display = 'block';
}

span.onclick = function() {
    set.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == set) {
        set.style.display = 'none';
    }
}
