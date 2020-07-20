import game from "./game.js";
// where we are starting in the game
let index = 0
// control point where we handle what's shown in the contentBox
const contentBox = document.querySelector('.contentBox')
// control point where we handle the title of each scene
let title = document.querySelector('.title')
// control point where we handle the description of each scene
const gameContent = document.querySelector('.description')
// control point where we handle the gameText for each of the scenes
const gameText = document.querySelector('.gameText')
// control point where we handle the score for the answers in the game
const score = document.querySelector('.score')
// control points where we will handle the choices in each of the scenes
let choice1 = document.querySelector('.choice1')
let choice2 = document.querySelector('.choice2')
let choice3 = document.querySelector('.choice3')
let choice4 = document.querySelector('.choice4')
// control point for where we will be starting the game when we load the game
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
  // moving to the next page
  if (index < 7) { index++
  // moving the game position forward
    if (game[game.currentLvl].options[0].answer === true) {game.score++}
  game.currentLvl = game.position[index]
  // displaying the backdrop image for the current scene
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  // grabbing the title and feeding it into the structure of the html
  title.innerHTML = game[game.currentLvl].title
  // grabbing the content and feeding it into the structure of the html
  gameContent.innerText = game[game.currentLvl].content
  // grabbing the query and feeding it into the structure of the html
  gameText.innerHTML = game[game.currentLvl].query
  // assigning each of the choice buttons to one of the actions [aka the game choices or riddle answers] available in the scene
  choice1.value = game[game.currentLvl].options[0].action
  choice2.value = game[game.currentLvl].options[1].action
  choice3.value = game[game.currentLvl].options[2].action
  choice4.value = game[game.currentLvl].options[3].action
  // telling the game to not show any options if it's already got to the end of the game index
    if (index === 7) {
      choice2.style.display = "none" 
      choice3.style.display = "none" 
      choice4.style.display = "none" 
    }
  // telling it to end the game rather than go any further in index
  } else {
    endGame()
  }
})

choice2.addEventListener('click', () => {
  if (index < 7) { index++
    if (game[game.currentLvl].options[1].answer === true) {game.score++}
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
  if (index < 7) { index++
    if (game[game.currentLvl].options[2].answer === true) {game.score++} 
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
  if (index < 7) { index++
    if (game[game.currentLvl].options[3].answer === true) {game.score++}
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

// here we are telling the game to display the score and reset itself at the end of the countdown
function endGame() {
  score.innerHTML = "score: " + game.score + "/6"
  setTimeout(() => {
    location.reload()
  }, 15000);
}