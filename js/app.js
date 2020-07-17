console.log('It\'s time to BEGIN!')

// object for our game overall
let game = {
  // where in the games scene array the player can be
  position: ['openScene', 'town', 'wardOne', 'ward2', 'ward3', 'ward4', 'vessel', 'endScene'],
  // to hold the players item(s)
  getItem: [],
  // item we want to check for later
  dagger: "The Dagger",

  openScene: 
    {
      // title of the scene
      title: "Tideport",
      // what goes in text box
      content: "The sleepy port town of Tideport rises from the fog.",
      // the image that gets loaded as a background for the scene
      backdrop: "url('./scanline.JPEG')",
      // the question, problem, etc we will aks/post to the player
      query: '',
      // the answer we are looking for
      //answer: '',
      // answer options
    },
  town: 
    {
      title: "The Market",
      content: "The town is quiet but there seems to be a tension running through the air and the people here. The market isn't particularly busy, though there is activity about. There is an old merchant in a stall shaded with a cloth tethered to the building the stall sits in front of. Tendrils of smoke from the merchant's pipe puff out periodically and drift up, almost caressing the shadecloth as it disipates in the air above.",
      backdrop: "url('./scanline.JPEG')",
      query: "Old Merchant: I've felt the weight of it here in the market, as I try to sell my wares. People don't quit meet each others eyes these days. Whatever's going round with the Wards is scaring the simple folks here. Maybe an adventurer such as yourself might be interested in an old sailor's finer selection? <br> The merchant pulls out a covered box from under the stalls top and opens it for you to inspect. Which will you buy?",
      options: [
        {
          action: 'The Compass.',
          description: `A fine bauble, always useful to one who travels as often as you.`,
        },
        { 
        action: 'The Brooche.',
        description: `Made of solid silver it has what looks like a sleeping babe engraved on it under a moon.`
        },
        { 
        action: 'The Dagger.',
        description: `Ornate, finely crafted, with a blade of fine Go\'rrin mottled steel. It\'s said creatures not from this plane hate Go\'rrin steel.`
        },
        { 
        action: 'None.', 
        description: `I've no interest in trinkets.`,
        },
      ],
  wardOne: 
    {
      title: "",
      content: "The Ward looks like a giant ear of corn, with a huge ancient tree trunk for a husk at it's bottom, and some sort of crystal for it's cobb. The crystal glows in a pattern that brings to mind deep breathing. Circled around the trunk, on the ground surrounding it, is what looks to be slate circles all in a ring with some kind of writing upon them.",
      backdrop: "url('./project-1-wireframe.png')",
      query: "When you get closer you can see the slate circles have been scribed on with an enchanter's chalk. The inscription seems broken in places however. The enscription on the first circle reads: 'What must you first give away to keep?",
      answer: '',
      options: [
        { 
          action: 'A Secret', 
          description: ``,
          },
        { 
          action: 'A Gold Coin', 
          description: ``,
          },
        { 
          action: 'A Spell', 
          description: ``,
          },
        { 
            action: 'Your Word', 
            description: ``,
          },
      ],
    },
  ward2: 
    {
      title: "",
      content: "The second Ward is an hour out from the town proper. The",
      backdrop: "url('./scanline.JPEG')",
      query: '',
      answer: '',
      options: [
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
            action: '', 
            description: ``,
          },
      ],
    },
  ward3: 
    {
      title: "text",
      content: "flavor",
      backdrop: "url('./scanline.JPEG')",
      query: '',
      answer: '',
      options: [
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
            action: '', 
            description: ``,
          },
      ],
    },
  ward4: 
    {
      title: "text",
      content: "flavor",
      backdrop: "url('./scanline.JPEG')",
      query: '',
      answer: '',
      options: [
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
        { 
            action: '', 
            description: ``,
          },
      ],
    },
  vessel: 
    {
      title: "",
      content: "Here in the overhang over the worship hall below, where you finally corner the creature, sits the last of the Wards. It is the color of ice held up to the morning sky. It is much smaller than all the others in that it is only the size perhaps of a globe. Surrounding it is the solemn visage of The Lady of The Water cradling the Wardstone to her chest.",
      backdrop: "url('./scanline.JPEG')",
      query: 'What will you do?',
      options: [
        {
          action: 'Run',
          result: `The Shard is too quick for you to escape!` 
        }, 
        {
          action: 'Banish',
          result: `A pulse of energy leaves it but it shrugs it off!` 
        }, 
        {
          action: 'Attack',
          result: `The jewel in the pommel of The Dagger lights up and blinds you for an instant!`,
          answer: true,
        },  
        {
          action: 'Negotiate',
          result: `It lets out An earsplitting screech. It doesn't negotiate with mortals!` 
        }, 
      ],
    },
  endScene: 
    {
      title: "",
      content: "You revieve a missive later int he week to make your way to a village in a nearby valley, over the mountains that form a natural barrier around Tideport. The Mother of the Kinsmeet Vessel, Andradaradrah, is an old friend of the Mother of your own vessel so it is worrisome when the letter requesting urgent aid is not penned in her neat but overly ornate handwriting. The ride there will take you four days at a strong pace.",
      backdrop: "url('./scanline.JPEG')",
      query: '',
      answer: 'Journey Forth',
      options: [
        { 
          action: '', 
          description: ``,
          },
        { 
          action: '', 
          description: ``,
          },
      ],
    },
  },
};
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
  // let the program know that when the next button is clicked it should check which scene we are in
  let currentLvl = game.position[index]
  console.log(currentLvl)
  // set the style of the background image to the image labeled backdrop inside the openScene component inside the game object
  //contentBox.style.backgroundImage = game[currentLvl].backdrop
  contentBox.setAttribute("style", `background-image: ${game[currentLvl].backdrop}`)
// we gave it the text from the game assigned to the title category in the game object and tell it to load the title for the current scene
  title.innerText = game[currentLvl].title
  //we took the title from the game/openScene and put it into the DOM so that it would show up on the screen 
  contentBox.appendChild(title)
  // when entering the scene it will load the game text/content for that scene
  gameContent.innerText = game[currentLvl].content
  contentBox.appendChild(gameContent)
  // when entering the scene if it has options it will generate option choice buttons
  if (game[currentLvl].options) {
    for (let i = 0; i < game[currentLvl].options.length; i++) {
        game[currentLvl].options.action
        let choice = document.createElement('button')
        choice.innerText = game[currentLvl].options[i].action
        console.log('Is it working?')
        optionBox.appendChild(choice)
    }
  }
  // it moves forward the place we are in in the scene array
  if (game.position.length != index + 1) {
  index ++}
  console.log('Care for a riddle?')
})

let backButton = document.querySelector('.back')
backButton.addEventListener('click', () => {
  let currentLvl = game.position[index]
  
  contentBox.style.backgroundImage = game[currentLvl].backdrop
  title.innerText = game[currentLvl].title
  contentBox.appendChild(title)
  gameContent.innerText = game[currentLvl].content
  contentBox.appendChild(gameContent)
  // it moves back the place we are in in the scene array
  if (index != 0) {
  index --
  }
})


