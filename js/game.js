// object for our game overall
let game = {
  // our curerent level in the game
  currentLvl: 'openScene',
  // where in the games scene array the player can be
  position: ['openScene', 'town', 'wardOne', 'ward2', 'ward3', 'ward4', 'vessel', 'endScene'],
  // to hold the players item(s)
  // inventory: [],
  // item we want to check for later
  // haveDagger: false,
  // selectedItem: "",
  // selectedAnswer: 0,
  score: 0,

  openScene:
  {
    // title of the scene
    title: "Tideport",
    // what goes in text box
    content: "The sleepy port town of Tideport rises from the fog.",
    // the image that gets loaded as a background for the scene
    // backdrop: "url('./scanline.JPEG')",
    // the question, problem, etc we will aks/post to the player
    query: 'Is it nice',
    // the answer we are looking for
    //answer: '',
    options: [
      {
        action: '',
        description: ``,
        answer: false,
      },
      {
        action: '',
        description: ``,
        answer: false,
      },
      {
        action: '',
        description: ``,
        answer: false,
      },
      {
        action: '',
        description: ``,
        answer: false,
      },
    ]
  },
  town:
  {
    title: "The Market",
    content: "The town is quiet but there seems to be a tension running through the air and the people here. The market isn't particularly busy, though there is activity about. There is an old merchant in a stall shaded with a cloth tethered to the building the stall sits in front of. Tendrils of smoke from the merchant's pipe puff out periodically and drift up, almost caressing the shadecloth as it disipates in the air above.",
    // backdrop: "url('./scanline.JPEG')",
    query: "Old Merchant: I've felt the weight of it here in the market, as I try to sell my wares. People don't quit meet each others eyes these days. Whatever's going round with the Wards is scaring the simple folks here. Maybe an adventurer such as yourself might be interested in an old sailor's finer selection? <br> The merchant pulls out a covered box from under the stalls top and opens it for you to inspect. Which will you buy?",
    options: [
      {
        action: 'The Compass.',
        id: 'compass',
        description: `A fine bauble, always useful to one who travels as often as you.`,
        answer: false,
      },
      {
        action: 'The Brooche.',
        id: 'brooche',
        description: `Made of solid silver it has what looks like a sleeping babe engraved on it under a moon.`,
        answer: false,
      },
      {
        action: 'The Dagger.',
        id: 'dagger',
        description: `Ornate, finely crafted, with a blade of fine Go\'rrin mottled steel. It\'s said creatures not from this plane hate Go\'rrin steel.`,
        answer: false,
      },
      {
        action: 'None.',
        id: 'none',
        description: `I've no interest in trinkets.`,
        answer: false,
      },
    ],
  },
  wardOne:
  {
    title: "A Tower Ward",
    content: "The Ward looks like a giant ear of corn, with a huge ancient tree trunk for a husk at it's bottom, and some sort of crystal for it's cobb. The crystal glows in a pattern that brings to mind deep breathing. Circled around the trunk, on the ground surrounding it, is what looks to be slate circles all in a ring with some kind of writing upon them.",
    // backdrop: "url('./project-1-wireframe.png')",
    query: "When you get closer you can see the slate circles have been scribed on with an enchanter's chalk. The inscription seems broken in places however. The enscription on the first circle reads: 'What must you first give away to keep?",
    options: [
      {
        action: 'A Secret',
        description: `Nope.`,
        answer: false,
      },
      {
        action: 'A Gold Coin',
        description: ``,
        answer: false,
      },
      {
        action: 'A Spell',
        description: ``,
        answer: false,
      },
      {
        action: 'Your Word',
        description: ``,
        answer: true,
      },
    ],
  },
  ward2:
  {
    title: "A Ward In The Sand",
    content: "The second Ward is an hour out from the town proper. The obilisk like structure juts suddenly out from where the land turns to the grey sand of the coast. The cool water of this part of the world is dark, even in the daylight. The crystal set into this ward glows faintly, like seafoam in the early morning sun",
    // backdrop: "url('./scanline.JPEG')",
    query: 'There, carved into the wooden pillar the wardstone sits at the top of is the fading enscription, "I have towns without people, forests without trees, and rivers without water. What am I?"',
    options: [
      {
        action: 'A Legend',
        description: ``,
        answer: false,
      },
      {
        action: 'A Lie',
        description: ``,
        answer: false,
      },
      {
        action: 'A Map',
        description: ``,
        answer: true,
      },
      {
        action: 'A Journey',
        description: ``,
        answer: false,
      },
    ],
  },
  ward3:
  {
    title: "A Mountain Ward",
    content: "The third Ward takes a few hours on foot but is near impossible to get to by mount. It is nestled against the side of an overhang in one of the mountains cradling the sleepy port town. The stone is covered around it's top in vines and seems to have taken on some of there coloring, as it is a soft verdant green.",
    // backdrop: "url('./scanline.JPEG')",
    query: 'Carved across the hard mountain rock just above the wardstone their is a half-grown over inscription that you can just make out as, "I am the beginning of the end, and the end of before.What am I?"',
    answer: '',
    options: [
      {
        action: 'Death',
        description: ``,
        answer: false,
      },
      {
        action: 'A Nightmare',
        description: ``,
        answer: false,
      },
      {
        action: 'The letter E',
        description: ``,
        answer: true,
      },
      {
        action: 'The Devil',
        description: ``,
        answer: false,
      },
    ],
  },
  ward4:
  {
    title: "A Ward In A Cave",
    content: "The Cave is half a days journey by foot but less by wagon, though there is spelunking involved in getting to the actual location of the Ward itself. This Ward sits atop a small altar in the middle of a pond deep down into the cave system it rests under. It illuminates the crystalline walls in a kelidescope of color as the sole source of light if one does not have a lantern or some other means of lighting the way.",
    // backdrop: "url('./scanline.JPEG')",
    query: 'The purple light changes into a rainbow of color the farther up it\'s beams reach. Inscribed in the altar below it, on either side of it, in faded etchings it reads, "What breathes, consumes, and grows, but was and never will be alive?"',
    options: [
      {
        action: 'A Dragon',
        description: ``,
        answer: false,
      },
      {
        action: 'A Dryad',
        description: ``,
        answer: false,
      },
      {
        action: 'Magic',
        description: ``,
        answer: false,
      },
      {
        action: 'Fire',
        description: ``,
        answer: true,
      },
    ],
  },
  vessel:
  {
    title: "The Vessel of Tideport",
    content: "Here in the overhang over the worship hall below, where you finally corner the creature, sits the last of the Wards. It is the color of ice held up to the morning sky. It is much smaller than all the others in that it is only the size perhaps of a globe. Surrounding it is the solemn visage of The Lady of The Water cradling the Wardstone to her chest.",
    // backdrop: "url('./scanline.JPEG')",
    query: 'What will you do?',
    options: [
      {
        action: 'Run',
        result: `The Shard is too quick for you to escape!`,
        answer: false,
      },
      {
        action: 'Banish',
        result: `A pulse of energy leaves it but it shrugs it off!`,
        answer: false,
      },
      {
        action: 'Attack',
        result: `The jewel in the pommel of The Dagger lights up and blinds you for an instant!`,
        answer: true,
      },
      {
        action: 'Negotiate',
        result: `It lets out An earsplitting screech. It doesn't negotiate with mortals!`,
        answer: false,
      },
    ],
  },
  endScene:
  {
    title: "",
    content: "You recieve a missive later int he week to make your way to a village in a nearby valley, over the mountains that form a natural barrier around Tideport. The Mother of the Kinsmeet Vessel, Andradaradrah, is an old friend of the Mother of your own vessel so it is worrisome when the letter requesting urgent aid is not penned in her neat but overly ornate handwriting. The ride there will take you four days at a strong pace.",
    // backdrop: "url('./scanline.JPEG')",
    query: '',
    answer: 'Journey Forth',
    options: [
      {
        action: 'Journey Forth',
        description: `Continue your journey.`,
        answer: true,
      },
      {
        action: '',
        description: ``,
        answer: false,
      },
      {
        action: '',
        description: ``,
        answer: false,
      },
      {
        action: '',
        description: ``,
        answer: false,
      },  
    ],
  },
};

export default game;