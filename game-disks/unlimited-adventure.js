const unlimitedAdventure = {
  roomId: 'diveIntro',
  numPhotos: [],
  inventory: [        
        { name: 'net', 
           use: ({disk, println, getRoom, enterRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'gameStart') {
            println('There is nothing to capture here. Only darkness, and you can only bring back its memory.');
            return;
          }  else if (room.id == 'gameStart') {
            println('Good practice. This may prove to be a useful tool.');
            return;
              
          } 
             else if (room.id == 'coralReef') {
            println('These fish are too fast for your terrestrial reflexes and disappear into the expanse. You do succeed in chipping off a large section of virgin coral. You have defaced something irreplaceable. Crumbs of prehistory slip through the holes in your net and drift slowly to an even deeper, unreachable place. You are left with only a sense of shame.');
            return;
              
          }  else if (room.id == 'expanseWest') {
            println('You swipe at the darkness and come back with nothing.');
            return;
              
          }
             else if (room.id == 'expanseNorth') {
            println('You swipe at the darkness and come back with nothing.');
            return;
              
          }
             else if (room.id == 'coolRock') {
            println('You acquire the unspeakably cool rock. Hopefully its magnificence will resonate at home.');
                var item = {name: 'cool rock'}
                disk.inventory.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }
             else if (room.id == 'ancientShark') {
            println('What a terrible decision. You ineffectually swat at the Ancient Shark of Numberless Teeth and it swallows you whole.');
            enterRoom('diveIntro');
              
          }
             else if (room.id == 'incomprehensibleWhale') {
            println('Your net bumps up against the creature that is larger than the town you grew up. It is not a surprise that it does not fit inside your pitiful tool.');
            return;
              
          }
              else if (room.id == 'plasticBottle') {
            println('You retrieve the plastic bottle. Good. It is clean and empty and dark again.');
                var item = {name: 'plastic bottle'}
                disk.inventory.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }
             else if (room.id == 'prehistoricKelpForest') {
            println('You retrieve some prehistoric kelp. Excellent. This is a viable protein source and will make a wonderful snack later.');
                var item = {name: 'kelp'}
                disk.inventory.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }
             else {
             console.log(room.id)
          }
        }},
        { name: 'camera', 
         desc: 'This needs a description',
         use: ({disk, println, getRoom}) => {
            const room = getRoom(disk.roomId);
            if (room.id == 'gameStart') {
            println('Your photo is dark and blurry. It does nothing to capture the effect of the vast emptiness before you.');
                var item = {name: 'blurry photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
          }  else if (room.id == 'gameStart') {
            println('You now have a photo of the ocean. It is blue but also a little green.');
                var item = {name: 'blurry photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } else if (room.id == 'coralReef') {
            println('The brilliant luminescence of these tiny creatures and their majestic habitat is captured forever in your photograph. ');
                var item = {name: 'photo of fish with reef'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }  else if (room.id == 'expanseWest') {
            println('A wasted exposure. There is nothing here.');
                var item = {name: 'blurry photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else if (room.id == 'expanseNorth') {
            println('A wasted exposure. There is nothing here.');
                var item = {name: 'blurry photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else if (room.id == 'coolRock') {
            println('Your photo does the cool rock no justice. You really do need to see it in person to understand why it is so so cool.');
                var item = {name: 'rock photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else if (room.id == 'ancientShark') {
            println('Your hands are shaky as your camera flashes. All that is captured is a blurry image of a few teeth and the suggestion of many more.');
                var item = {name: 'incomplete documentation of impossible being'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else if (room.id == 'incomprehensibleWhale') {
            println('A dark grey mass is all that your camera captures. When your eyes could not grasp the enormity of this being it was foolish to think that your camera would be capable.');
                var item = {name: 'grey mass photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else if (room.id == 'plasticBottle') {
            println('You now have a photo of the translucent green plastic bottle. Useful.');
                var item = {name: 'plastic bottle photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else if (room.id == 'prehistoricKelpForest') {
            println('You now have a photo of the Prehistoric Kelp Forest. Perhaps it is impossible to capture, or perhaps you are a poor photographer, but this image does nothing to reflect the weight or scale of the sight.');
                var item = {name: 'kelp photo'}
                disk.numPhotos.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          } 
           else {
             console.log(room.id)
          }
         }}
  ],
  rooms: [
    {
      name: 'ESCAPE THE MBTA!',
      id: 'diveIntro',
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
            if (room.id == 'gameStart') {
            println('There is nothing to unlock here.');
            return;
          }  else if (room.id == 'gameStart') {
            println('There is nothing to unlock here.');
            return;
              
          } 
             else if (room.id == 'ccStation') {
            println('There is nothing to unlock here.');
            return;
              
          }  else if (room.id == 'escalator') {
            println('There is nothing to unlock here.');
            return;
              
          }
             else if (room.id == 'rugglesPizza') {
            println('There is nothing to unlock here.');
            return;
              
          }
             else if (room.id == 'bench') {
            println('There is nothing to unlock here.');
                var item = {name: 'cool rock'}
                disk.inventory.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }
             else if (room.id == 'tixBooth') {
            println('You have unlocked the ticket booth, you step inside...');
            enterRoom('diveIntro');
              
          }
             else if (room.id == 'dunkinDonuts') {
            println('There is nothing to unlock here.');
            return;
              
          }
              else if (room.id == 'ogPlatform') {
            println('There is nothing to unlock here.');
                var item = {name: 'plastic bottle'}
                disk.inventory.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }
             else if (room.id == 'fhPlatform') {
            println('There is nothing to unlock here');
                var item = {name: 'kelp'}
                disk.inventory.push(item);
                println(`You took the ${item.name}.`);
            return;
              
          }
             else {
             console.log(room.id)
          }
        }}
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
        Welcome to the second train car.
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
