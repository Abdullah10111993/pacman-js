import { LEVEL, OBJECT_TYPE } from './setup';

// classes
import GameBoard from './GameBoard';
import Pacman from './Pacman';

//DOM Elements 
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

// Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;


function gameOver(pacman, grid){

}

function checkCollision(pacman, ghosts){

}

function gameloop(pacman, ghosts){

}

function startGame(){
    console.log('Starting..');
    gameWin = false;
    powerPillActive = false;
    score = 0;

    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const pacman = new Pacman(2, 287);

    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
    document.addEventListener('keydown', e =>
        pacman.handleKeyInput(e, gameBoard.objectExist)
    );
}

// initialize Game

startButton.addEventListener('click', startGame);