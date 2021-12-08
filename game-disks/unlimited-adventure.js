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
        Do you take an action here or go East, West, North or South?
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
      ____  ____  __ _   ___  _  _ 
     (  _ \(  __)(  ( \ / __)/ )( \
      ) _ ( ) _) /    /( (__ ) __ (
     (____/(____)\_)__) \___)\_)(_/
      `,
      desc: `
        You approach a bench, it's super comfy looking, for a bench at least.
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
      desc: `
        You enter Ruggles Pizza & Cafe! So yum!
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'dunkinDonuts' },
        { dir: 'west', id: 'tixBooth' },
        { dir: 'south', id: 'gameStart' }     
      ]
    },
    {
      name: 'Bench',
      id: 'bench',
      img:`
      ____  ____  __ _   ___  _  _ 
     (  _ \(  __)(  ( \ / __)/ )( \
      ) _ ( ) _) /    /( (__ ) __ (
     (____/(____)\_)__) \___)\_)(_/
      `,
      desc: `
        You come across a bench! Good job, it's a really neat bench as far as train station benches go. 
        Do you take action here or go East, West, North or South?


      `,
      exits: [
        { dir: 'east', id: 'ogPlatform' },
        { dir: 'west', id: 'fhPlatform' },
        { dir: 'north', id: 'gameStart' }       
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
         You enter the ticket booth! 
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
           use: ({disk, println, getRoom, enterRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'tixBooth') {
            println('You have unlocked the ticket booth, you step inside...');
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
         You end up on the Oak Grove platform, the train's coming soon!
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
         You end up on the Oak Grove platform, the train's coming soon!
         Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'bench' },
        { dir: 'north', id: 'escalator' }
        
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
      desc: `
        You enter Ruggles Pizza & Cafe! So yum!
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'dunkinDonuts' },
        { dir: 'west', id: 'tixBooth' },
        { dir: 'south', id: 'gameStart' }     
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
      desc: `
        Welcome to the second train car.
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
      desc: `
        Welcome to the third train car.
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
       __ _   __  ____  ____  _  _ 
      (  ( \ /  \(  _ \(_  _)/ )( \
      /    /(  O ))   /  )(  ) __ (
      \_)__) \__/(__\_) (__) \_)(_/
      `,
      desc: `
        You step into a wide hallway.
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
      desc: `
        You step onto the Red Line platform.
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
       _  _  ____  ____  ____ 
      / )( \(  __)/ ___)(_  _)
      \ /\ / ) _) \___ \  )(  
      (_/\_)(____)(____/ (__) 
      `,
      desc: `
        You step into a wide hallway.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'north', id: 'olPlatform' }, 
        { dir: 'east', id: 'ccStation2' },  
        { dir: 'south', id: 'slPlatform' }
      ]
    },
    {
      name: 'Charlie Card Station',
      id: 'ccStation2',
      img: `
     -----------
    |    ---    |
    |   |       |
    |    ---    |
     -----------
      `,
      desc: `
        Welcome to the second train car.
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
              img: `    _   __
        ___________/| o/  o/o/
         (__|||__) \|        
              `,
      desc: `
        Welcome to the second train car.
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
      desc: `
        You step onto the Silver Line platform.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'southHall' },
        { dir: 'north', id: 'slPlatform' }
      ]
    },
        {
      name: 'South Hallway',
      id: 'southHall',
      img: `
       ____   __   _  _  ____  _  _ 
      / ___) /  \ / )( \(_  _)/ )( \
      \___ \(  O )) \/ (  )(  ) __ (
      (____/ \__/ \____/ (__) \_)(_/
      `,
      desc: `
        You step into a wide hallway.
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
      desc: `
        You're standing in front of the escalators leading up to the street.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'west', id: 'southHall' },
        { dir: 'north', id: 'performer'}
      ]
    },
  ], 
};
