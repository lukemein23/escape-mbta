const unlimitedAdventure = {
  roomId: 'mbtaIntro',
  inventory: [],
  rooms: [
    {
      name: 'ESCAPE THE MBTA!',
      id: 'mbtaIntro',
      img: `
      ____
      |  |____T_
      |_ |_____|<
        @-@-@-oo\
        `,
      desc: `
Welcome, fellow huskies! Your challenge today is to escape Ruggles and embark on a quest to find the train stop that will reveal the hidden treasure. During your commute via MBTA, you stumble upon some clues that guide you to your final destination. 

Type "go escape" to begin your journey.
      `,
      exits: [
        { dir: 'escape', id: 'gameStart' }
      ]
    },
    {
      name: 'Ruggles',
      id: 'gameStart',
      onEnter: ({}) => {
        var audio = new Audio('audio_file.mp3');
        audio.play();
    return;}, 
      img: `
____
|R |____T_
|_ |_____|<
  @-@-@-oo\
`,
      desc: `
You've been in Ruggles before, but today it's especially mysterious.

Do you go East, West, North or South?
      `, 
      exits: [
        { dir: 'east', id: 'ccStation' },
        { dir: 'west', id: 'escalator' },
        { dir: 'north', id: 'rugglesPizza' },
        { dir: 'south', id: 'bench' }
        
      ]
    },
    {
      name: 'Charlie Card Stations',
      id: 'ccStation',
      img: `
     -----------
    |    ---    |
    |   |       |
    |    ---    |
     -----------
      `,
      desc: `
        You walk toward the Charlie Card Refill Stations.
        
        Do you take action here or go East, West, North or South?
      `,
      exits: [
        { dir: 'west', id: 'gameStart' },
        { dir: 'north', id: 'dunkinDonuts' },
        { dir: 'south', id: 'ogPlatform' }
        
      ]
    },
    {
      name: 'Bench',
      id: 'bench',
      img: `
     -----------
    |           |
    |-----------|
    |           |            
      `,
      items: [        
        { name: 'rock', 
           desc: `You take a look at the rock...
            
            "You'll find something important in a place with squares on the outside that become circles when opened and turn into triangles when separated."
            
            This seems to be some sort of clue, you should take it so you can look at it again later.`,
         isTakeable: true
        }
         
  ],
      desc: `
        You approach a bench, it's super comfy looking, for a bench at least. You take a closer look and notice there's a rock on it with some words etched into it... strange.
  
        Do you take action here or go East, West, North or South?
      `,
      exits: [
        { dir: 'east', id: 'ogPlatform' },
        { dir: 'west', id: 'fhPlatform' },
        { dir: 'north', id: 'gameStart' },
      ]
    },
     {
      name: 'Escalator',
      id: 'escalator',
      img: `
           ---
          |
        --
       |
     --
      `,
      desc: `
        You stumble upon the escalators leading to Northeastern University's campus. An unknown force prevents you from proceeding
        in this direction.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'gameStart' },
        { dir: 'north', id: 'tixBooth' },
        { dir: 'south', id: 'fhPlatform' }      
      ]
    },
    {
      name: 'Ruggles Pizza & Cafe',
      id: 'rugglesPizza',
      img: `
         // ""--.._
        ||  (_)  _ "-._
        ||    _ (_)    '-.
        ||   (_)   __..-'
         \\__..--""
         `,
      items: [        
        { name: 'mask', 
           desc: `It's a typical disposable face mask, it's not a KN95 but it'll get the job done.`,
           use: ({disk, println, getRoom, enterRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'ogPlatform') {
            println('Now that you have your mask equipped, the train conductor gestures for you to enter the train... you step inside.');
            enterRoom('trainIntro');
            return;
          }  
             else {
            println('You try putting the mask on your face but it falls back into your inventory, it seems to only be usable in a certain location... weird.');
            return;
          }
        },
       isTakeable: true}
  ],
      desc: `
        You enter Ruggles Pizza & Cafe! So yum! There's a box of disposable face masks on the counter.
        
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'dunkinDonuts' },
        { dir: 'west', id: 'tixBooth' },
        { dir: 'south', id: 'gameStart' }     
      ]
    },
     {
      name: 'Ticket Booth',
      id: 'tixBooth',
      img:  `
         ____
         |""| 
         |""|      
         |""|      
        "'""'""
      `,
      desc: `
         You're outside of a chic ticket booth now, you'd prefer to be inside but the door appears to be locked.
         
         Do you take action here or go East, West, North or South?
      `,
      exits: [
        { dir: 'east', id: 'rugglesPizza' },
        { dir: 'south', id: 'escalator' }        
      ]
    },
    {
      name: 'Dunkin Donuts',
      id: 'dunkinDonuts',
      img: `
               )  (
             (   ) )
              ) ( (
         mrf_______)_
         .-'---------|  
        ( C|/\/\/\/\/|
         '-./\/\/\/\/|
           '_________'
            '-------'
      `,
      items: [        
        { name: 'key', 
           desc: `It's a shiny key with a blue tint, so neat!`,
           use: ({disk, println, getRoom, enterRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'tixBooth') {
            println('You have unlocked the ticket booth, you step inside...');
            enterRoom('boothInterior');
            return;
          }  
             else {
            println('There is nothing to unlock here.');
            return;
          }
        },
        isTakeable: true}
  ],
      desc: `
         You stand in front of Dunkin Donuts and the aroma of coffee floods your senses. 
         
         You see something shiny near amidst the French crullers... upon further inspection you discover it's a key!
         
         Do you take action here or go East, West, North or South?
      `,
      exits: [
        { dir: 'west', id: 'rugglesPizza' },
        { dir: 'south', id: 'ccStation' }     
      ]
    },
    {
      name: 'Oak Grove Platform',
      id: 'ogPlatform',
      img: `
____
|OG|____T_
|_ |_____|<
  @-@-@-oo\
`,
      desc: `
         You walk onto the Oak Grove platform - the train's here!
         
         The conductor tells you:
         
         "If you wanna board this train, you'd better wear a mask!"
         
         Do you take action here or go East, West, North or South?
      `,
      exits: [
        { dir: 'west', id: 'bench' },
        { dir: 'north', id: 'ccStation' }
        
      ]
    },
    {
      name: 'Forest Hills Platform',
      id: 'fhPlatform',
      img: `
____
|FH|____T_
|_ |_____|<
  @-@-@-oo\
`,
      desc: `
         You end up on the Forest Hills platform, it's pretty neat!
         Do you take action here or go East, West, North or South?
         
      `,
      exits: [
        { dir: 'east', id: 'bench' },
        { dir: 'north', id: 'escalator' }
        
      ]
    },
    {
      name: 'TRAIN TO OAK GROVE!',
      id: 'trainIntro',
      img: `
____
|OG|____T_
|_ |_____|<
  @-@-@-oo\
`,
      desc: `
        You've made it to the second stage of the game - the train to Oak Grove!
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'car2' }  
      ]
    },
    {
      name: 'Car 2',
      id: 'car2',
      img: `
         o O___ _________
       _][__|o| |O O O O|
      <_______|-|_______|
       /O-O-O     o   o
      `,
      items: [               
        { name: 'poster', 

           desc: `You take a closer look at the poster...
            
            "You're gonna wanna get off this train and go straight to Primark!"
            
            This seems to be some sort of clue, it'd be a bit bold to rip this poster off the wall but you could take it so you can look at it again later.`,
             isTakeable: true
        }
         
  ],
      desc: `
        Welcome to the second train car. Comparing this train car to the first train car is like comparing Nutella to Peanut Butter.
        
        You notice a poster on the wall that appears to have some text on it.
        
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'trainIntro' }, 
        { dir: 'east', id: 'car3' },  
      ]
    },
    {
      name: 'Car 3',
      id: 'car3',
      img: ` 
           o O___ _________ _________
         _][__|o| |O O O O| |O O O O|
        <_______|-|_______|-|_______|   
         /O-O-O     o   o     o  o
       
      `,
       items: [        
         { name: 'robobutton', 
            desc: 'Upon further inspection it appears that robobutton has an intricate geometric design all over it - how cool!',
           use: ({disk, println, getRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'car3') {
            println('robobutton is out of commission... beep beep beep.');
            return;
            }
             else {
               println('Woah! Are you even human? It should be impossible for this line to be printed!');
               return;
             }
        }
        },
         { name: 'megabutton', 
            desc: 'You take a look at megabutton... something seems amiss.',
           use: ({disk, getRoom, println}) => {
            const room = getRoom(disk.roomId); 
            if (room.id == 'car3') {
            println('Upon pressing megabutton you realize its not actually a button at all, just a soda bottle cap masquerading as a button... megabutton? More like MEGAPOSER.');
            return;
            }
            else {
               println('Woah! Are you even human? It should be impossible for this line to be printed!');
               return;
             }
        }
        },
         { name: 'buttonator', 
          desc: 'Buttonator is such a cool button! Nothing more to say about it!',
           use: ({disk, getRoom, println, enterRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'car3') {
            println('You press buttonator and the floor turns bright green... after about forty seconds the train doors open and you step into the Downtown Crossing Station.');
            enterRoom('olPlatform');
            return;
            }
             else {
               println('Woah! Are you even human? It should be impossible for this line to be printed!');
               return;
             }
        }
        }
         
  ],
      desc: `
        Welcome to the third train car. It seems they've switched up their system...
        
        There are three buttons available for use, they're labeled with cute names too...
        
        You take a closer look at the buttons, there's "robobutton," which would send a request to stop at Haymarket, "buttonator," which would send a request to stop at Downtown Crossing, and "megabutton," which would send a request to stop at Tufts Medical Center.
        
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'car2' }
      ]
    },
        {
      name: 'Orange Line Platform',
      id: 'olPlatform',
      img: `
      ____
      |O |____T_
      |_ |_____|<
        @-@-@-oo\
`,
      desc: `
         You've made it to the third stage of the game - Downtown Crossing!
         You step out onto the Orange Line platform.
         Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'northHall' },
        { dir: 'south', id: 'westHall' }
        
      ]
    },
    {
      name: 'North Hallway',
      id: 'northHall',
      img: `
      -------------------
      
      -------------------
      `,
      items: [               
        { name: 'quarter', 
         desc: 'You flip over the quarter and it`s one of those ones that people collect! With a national park on the back... this one is from California. This gets you thinking about taking a trip to Yosemite... but you have other priorities right now.',
         isTakeable: true
        }         
  ],
      desc: `
        You step into a wide hallway. You see a quarter on the ground... it's super silver.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'rlPlatform' },
        { dir: 'west', id: 'olPlatform' },
        { dir: 'south', id: 'ccStation2' }     
      ]
    },
    {
      name: 'Red Line Platform',
      id: 'rlPlatform',
      img: `
      ____
      |R |____T_
      |_ |_____|<
        @-@-@-oo\
`,     
      items: [               
        { name: 'dollar',
           desc: 'It`s a regular old U.S. dollar bill.',
          use: ({disk, getRoom, getItem, println, enterRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'performer' && disk.inventory.includes(getItem('quarter')) && disk.inventory.includes(getItem('frisbee')) && disk.inventory.includes(getItem('token'))) {
            println('You place the dollar in the performer`s hat and he hands you a Charlie Card with unlimited value... He also snaps his fingers and a section of the wall next to him gives way to a hidden passage... You step through this entryway.');
            enterRoom('gameWin');
            return;
            }
             else if (room.id == 'performer') {
               println('As you go to place the the dollar in the performer`s hat, he stops you and tells you this: "I will not accept your bill until you have obtained three objects whose colors play a large role in this station."');
               return;
             }
            else {
              println('You pull the dollar out and look at it... it`s a pretty classic bill... You put it back in your inventory.')
            }
        },
         isTakeable: true
        }         
  ],
      desc: `
        You step onto the Red Line platform. In front of your eyes, a loose dollar glides through the air and settles on the edge of a trash can without falling in.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'northHall' },
        { dir: 'south', id: 'performer'}
      ]
    },
    {
      name: 'West Hallway',
      id: 'westHall',
      img: `
      -------------------
      
      -------------------
      `,
      items: [               
        { name: 'token',
         desc: 'You`ve never seen anything so red and circular.',         
         isTakeable: true
        }         
  ],
      desc: `
        You step into a wide hallway. You see a red token on the ground.
        
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'north', id: 'olPlatform' }, 
        { dir: 'east', id: 'ccStation2' },  
        { dir: 'south', id: 'slPlatform' }
      ]
    },
    {
      name: 'Charlie Card Station (Downtown Crossing)',
      id: 'ccStation2',
      img: `
     -----------
    |    ---    |
    |   |       |
    |    ---    |
     -----------
      `,
      items: [               
        { name: 'plush', 
         desc: `This plush is so soft-looking!`,
         isTakeable: true
        }         
  ],
      desc: `
        You approach a set of Charlie Card Stations. Resting atop one of these stations is a blue plush.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'westHall' },
        { dir: 'east', id: 'performer' },
        { dir: 'south', id: 'southHall' },
        { dir: 'north', id: 'northHall' }
      ]
    },
        {
      name: 'Performer',
      id: 'performer',
              img: `
                        _   __
        ___________/| o/  o/o/
         (__|||__) \|        
              `,
      desc: `
        You walk towards someone performing. They have a hat turned upside-down on the floor in front of them.
        
        Do you take action here or go East, West, North or South?

      `,
          
          
      exits: [
        { dir: 'north', id: 'rlPlatform' },
        { dir: 'west', id: 'ccStation2' },
        { dir: 'south', id: 'escalator2' }
      ]
    },
        {
      name: 'Silver Line Platform',
      id: 'slPlatform',
      img: `
      ____
      |Sl|____T_
      |_ |_____|<
        @-@-@-oo\
`,
      items: [               
        { name: 'figurine',
         desc: `It's a figurine of Peter Chermayeff, an architect who was crucial in the MBTA's redesign process.
         
         (Psst... here's a link if you want to learn more: https://podcast.andover.edu/2019/02/12/episode-24-architect-peter-chermayeff-53/)
         `,
         isTakeable: true
        }         
  ],
      desc: `
        You step onto the Silver Line platform. You spot a purple figurine on a bench.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'southHall' },
        { dir: 'north', id: 'westHall' }
      ]
    },
        {
      name: 'South Hallway',
      id: 'southHall',
      img: `
      -------------------
      
      -------------------
      `,
      items: [               
        { name: 'frisbee', 
         desc: 'This frisbee definitely catches some speed when tossed.',
         isTakeable: true
        }         
  ],
      desc: `
        You step into a wide hallway. You see an orange frisbee on the ground.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'slPlatform' },
        { dir: 'east', id: 'escalator2' },
        { dir: 'north', id: 'ccStation' }
      ]
    },
        {
      name: 'Escalator',
      id: 'escalator2',
      img: `
           ---
          |
        --
       |
     --
     `,
      items: [               
        { name: 'cube', 
         desc: 'This cube has almost no features aside from being green and a cube... huh.',
         isTakeable: true
        },
        { name: 'advertisement', 
         desc: `You take a closer look at the writing on the advertisement...
         
         "You inventory is lacking in shapes with no sides."
         
         This seems like some sort of clue. It would be a risky move to dismount this ad from the wall and stash it in your inventory... but it's definitely a possible and understandable option if you want to look at it later.
         `,
         isTakeable: true
        }  
  ],
      desc: `
        You're standing in front of the escalators leading up to the street. You notice a green cube sitting off to the side.
        
        You also notice an advertisement... there's something written in neon marker in the corner.
        
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'southHall' },
        { dir: 'north', id: 'performer'}
      ]
    },
            {
      name: 'Ticket Booth Interior',
      id: 'boothInterior',
      img: ``,
      items: [        
        { name: 'note', 
           desc: `You take a look at the note...
            
            "The first word of the correct platform can be found in the first word of the incorrect platform."
            
            This seems to be some sort of clue, you should take it so you can look at it again later.
            
            Type "go exit" to step outside of the ticket booth`,
         isTakeable: true
        }
         
  ],
      desc: `
        Here you are, inside the ticket booth. It's more or less what you expected, nothing to write home about.
        
        You do a 360 spin to take in the room and, just as you're about to finish your investigative pirouette, you notice a really cool note taped to a desk. 
        
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'exit', id: 'tixBooth' }
      ]
    },
  ], 
};
