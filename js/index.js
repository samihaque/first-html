/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X'
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions -----*/
// board initialization
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    rander()
};

// declaring rander function
function rander(){
    board.forEach((mark, index) => {
        //this sets the text content of the square of the same index to the mark on the board.
        squares[index].textContent = mark;
    });

}

// declaring a function to handle turn
function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square=== event.target;
    })
    board[idx] = turn;
    turn = turn === 'X'? 'O': 'X';
    rander();
    console.log(board)
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