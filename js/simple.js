import game from "./game.js";

let index = 0

const contentBox = document.querySelector('.contentBox')

let title = document.querySelector('.title')

const gameContent = document.querySelector('.description')

const gameText = document.querySelector('.gameText')

const score = document.querySelector('.score')


let choice1 = document.querySelector('.choice1')
let choice2 = document.querySelector('.choice2')
let choice3 = document.querySelector('.choice3')
let choice4 = document.querySelector('.choice4')

window.onload = function () {  
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[game.currentLvl].query
  title.innerHTML = game[game.currentLvl].title
  choice1.value = "Next"
  choice2.value = "Page"
  choice3.value = "to"
  choice4.value = "Start"
}

choice1.addEventListener('click', () => {
  if (game[game.currentLvl].options[0].answer === true) {game.score++}
  if (index < 7) { index++ 
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  title.innerHTML = game[game.currentLvl].title
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[game.currentLvl].query
  choice1.value = game[game.currentLvl].options[0].action
  choice2.value = game[game.currentLvl].options[1].action
  choice3.value = game[game.currentLvl].options[2].action
  choice4.value = game[game.currentLvl].options[3].action
    if (index === 7) {
      choice2.style.display = "none" 
      choice3.style.display = "none" 
      choice4.style.display = "none" 
    }
  } else {
    endGame()
  }
})

choice2.addEventListener('click', () => {
  if (game[game.currentLvl].options[1].answer === true) {game.score++}
  if (index < 7) { index++
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  title.innerHTML = game[game.currentLvl].title
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[game.currentLvl].query
  choice1.value = game[game.currentLvl].options[0].action
  choice2.value = game[game.currentLvl].options[1].action
  choice3.value = game[game.currentLvl].options[2].action
  choice4.value = game[game.currentLvl].options[3].action
  if (index === 7) {
    choice2.style.display = "none" 
    choice3.style.display = "none" 
    choice4.style.display = "none" 
  }
}
})

choice3.addEventListener('click', () => {
  if (game[game.currentLvl].options[2].answer === true) {game.score++} 
  if (index < 7) { index++
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  title.innerHTML = game[game.currentLvl].title
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[game.currentLvl].query
  choice1.value = game[game.currentLvl].options[0].action
  choice2.value = game[game.currentLvl].options[1].action
  choice3.value = game[game.currentLvl].options[2].action
  choice4.value = game[game.currentLvl].options[3].action
  if (index === 7) {
    choice2.style.display = "none" 
    choice3.style.display = "none" 
    choice4.style.display = "none" 
  }
  }
})

choice4.addEventListener('click', () => {
  if (game[game.currentLvl].options[3].answer === true) {game.score++}
  if (index < 7) { index++
// moving to the next page
  game.currentLvl = game.position[index]
// moving the game position forward
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  title.innerHTML = game[game.currentLvl].title
  gameContent.innerText = game[game.currentLvl].content
  gameText.innerHTML = game[game.currentLvl].query
  choice1.value = game[game.currentLvl].options[0].action
  choice2.value = game[game.currentLvl].options[1].action
  choice3.value = game[game.currentLvl].options[2].action
  choice4.value = game[game.currentLvl].options[3].action
  if (index === 7) {
    choice2.style.display = "none" 
    choice3.style.display = "none" 
    choice4.style.display = "none" 
  }
  }
})

function endGame() {
  score.innerHTML = "score: " + game.score + "/7"
}