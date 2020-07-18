import game from "./game.js";

// index is acting as a counter for where we are in the scene array
let index = 0

//  the contentBox is where we will feed in the things that will go intot the scene so first we have to define it
let contentBox = document.querySelector('.contentBox')

// we let the program know to add a header to the CSS for the title of the scene, if it has one
let title = document.createElement('h2')

// we let the program know to add a paragrapgh to the CSS for the game text for the story, if it has any
let gameContent = document.createElement('p')

// we let the program know we are going to have opitons for some of the scenes
let optionBox = document.querySelector('.optionBox')

// here we want to define the next button and go one up in the index of the game objects array of scenes
let nextButton = document.querySelector('.next')

// have the program listen for the user clicking
nextButton.addEventListener('click', () => {
  // if selecterd item is the dagger we want the value to be true
  if (game.selectedItem === 'dagger') {
    game.haveDagger = true
  }
  // adding tot he players score if they got the answer correct
  if (game[game.currentLvl].options[game.selectedAnswer].answer === true) {
    game.score++
  }
  console.log(game.score)
  // let the program know that when the next button is clicked it should check which scene we are in
  game.currentLvl = game.position[index]
  // set the style of the background image to the image labeled backdrop inside the openScene component inside the game object
  //contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  contentBox.setAttribute("style", `background-image: ${game[game.currentLvl].backdrop}`)
// we gave it the text from the game assigned to the title category in the game object and tell it to load the title for the current scene
  title.innerText = game[game.currentLvl].title
  //we took the title from the game/openScene and put it into the DOM so that it would show up on the screen 
  contentBox.appendChild(title)
  // when entering the scene it will load the game text/content for that scene
  gameContent.innerText = game[game.currentLvl].content
  contentBox.appendChild(gameContent)

  function handleClick(e) {
    // first we need to look at the action id, to see if it has one
    //will check if it exists and isn't empty
    if (e.target.id) {
      game.selectedItem = e.target.id
      // the ext as the description for the items/answers
      // will read the data attribut ande turn the string itno and integer 
      document.getElementsByClassName('gameText')[0].textContent = 
        game[game.currentLvl].options[parseInt(e.target.getAttribute('data-index'))].description;
      //storing the index of the players choice 
    } else {
      game.selectedAnswer = e.target.getAttribute('data-index')
    }

  }
  // clear the previous buttons
  optionBox.innerHTML = ""
  // when entering the scene if it has options it will generate option choice buttons
  if (game[game.currentLvl].options) {
    for (let i = 0; i < game[game.currentLvl].options.length; i++) {
        // game[game.currentLvl].options.action
        let choice = document.createElement('button')
        choice.innerText = game[game.currentLvl].options[i].action
        console.log('Is it working?')
        // checking to see if the object has an id
        if (game[game.currentLvl].options[i].hasOwnProperty('id')) {
          choice.setAttribute("id", `${game[game.currentLvl].options[i].id}`)
          //create additional data in the html which will let us store the index of the item they clicked on 
          choice.setAttribute("data-index", i)
        }
        // if there is an id it will set one, if there is not it will not, which will let us determine if there is a inventory check or not
        optionBox.appendChild(choice)
        choice.addEventListener('click', handleClick)
    }  
  }
  // it moves forward the place we are in in the scene array
  if (game.position.length != index + 1) {
  index ++}
  console.log('Care for a riddle?')
})

let backButton = document.querySelector('.back')
backButton.addEventListener('click', () => {
  game.currentLvl = game.position[index]
  contentBox.style.backgroundImage = game[game.currentLvl].backdrop
  title.innerText = game[game.currentLvl].title
  contentBox.appendChild(title)
  gameContent.innerText = game[game.currentLvl].content
  contentBox.appendChild(gameContent)
  // it moves back the place we are in in the scene array
  if (index != 0) {
  index --
  }
})


