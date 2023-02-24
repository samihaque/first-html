/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        's', 'a', 'm',
        'i', '', ''
    ];
    rander()
};
//calling the init function!
init();

// declaring rander function
function rander(){
    board.forEach((mark, index) => {
        console.log(mark, index)
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