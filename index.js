import { LEVEL, OBJECT_TYPE } from './setup';

// classes
import GameBoard from './GameBoard';

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

}

