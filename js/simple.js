import game from "./game.js";

let index = 0

const contentBox = document.querySelector('.contentBox')

let title = document.querySelector('.title')

const gameContent = document.querySelector('.description')

const gameText = document.querySelector('.gameText')


let choice1 = document.querySelector('.choice1')
let choice2 = document.querySelector('.choice2')
let choice3 = document.querySelector('.choice3')
let choice4 = document.querySelector('.choice4')

choice1.addEventListener('click', () => {
  if (game[game.currentLvl].options[0].answer[0] === true) {score++}
  index++ 
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[currentLvl].query
})

choice2.addEventListener('click', () => {
  if (game[game.currentLvl].options[0].answer[0] === true) {score++}
  index++ 
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[currentLvl].query

})

choice3.addEventListener('click', () => {
  if (game[game.currentLvl].options[0].answer[0] === true) {score++}
  index++ 
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[currentLvl].query
})

choice4.addEventListener('click', () => {
  if (game[game.currentLvl].options[0].answer[0] === true) {score++}
  index++ 
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[currentLvl].query
})