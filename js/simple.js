import game from "./game.js";

let index = 0

let contentBox = document.querySelector('.contentBox')

let optionBox = document.querySelector('.optionBox')

let choice1 = document.querySelector('.choice1')
let choice2 = document.querySelector('.choice2')
let choice3 = document.querySelector('.choice3')
let choice4 = document.querySelector('.choice4')

choice1.addEventListener('click', () => {
  if (game[game.currentLvl].options[0].answer === true) {score++}
  index++ 
//moving to the next page
  game.currentLvl = game.position[index]
  
}