/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    rander()
};
//calling the init function!
init();

// declaring rander function
function rander(){
    board.forEach((mark, index) => {
        
        //this sets the text content of the square of the same index to the mark on the board.
        squares[index].textContent = mark;
    });

}



// let squares = document.getElementsByClassName('square');
// console.log(squares)

// // let board = document.getElementById('board')
// console.log(board)

// let handleClick = () =>{
//     // do stuff
//     console.log('clicked!');
// }

// board.addEventListener('click', handleClick);