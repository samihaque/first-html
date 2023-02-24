/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
/*----- app's state (variables) -----*/
let board;

let turn;
let win;
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
// variable to change top message which indicates correct turn
const messages = document.querySelector('h2');
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);
/*----- functions -----*/
// board initialization
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    let toss = Math.floor(Math.random()*2);
    turn = toss === 0? 'X': 'O'
    
    rander()
};

// declaring rander function
function rander(){
    board.forEach((mark, index) => {
        //this sets the text content of the square of the same index to the mark on the board.
        squares[index].textContent = mark;
    });
    messages.textContent = win ==='T'? `That's a Tie!!`: win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
}

// declaring a function to handle turn
function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square=== event.target;
    })
    board[idx] = turn;
    turn = turn === 'X'? 'O': 'X';
    win = getWinner();
    rander();
    console.log(board)
}

// finding out the winner
function getWinner(){
    let winner = null;
    winningCombos.forEach(function(combo, index){
        if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]])
            winner= board[combo[0]];
    })
    return winner ? winner : board.includes('') ? null : 'T';
}

//calling the init function!
init();




// let squares = document.getElementsByClassName('square');
// console.log(squares)

// // let board = document.getElementById('board')
// console.log(board)

// let handleClick = () =>{
//     // do stuff
//     console.log('clicked!');
// }

// board.addEventListener('click', handleClick);