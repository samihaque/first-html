
let squares = document.getElementsByClassName('square');
console.log(squares)

let board = document.getElementById('board')
console.log(board)

let handleClick = () =>{
    // do stuff
    console.log('clicked!');
}

board.addEventListener('click', handleClick);