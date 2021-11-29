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

      `,
      desc: `
Welcome, fellow huskies! Your challenge today is to escape Ruggles and embark on a quest to find the train stop that will reveal the hidden treasure. During your commute via MBTA, you stumble upon some clues that guide you to your final destination. 

Your first challenge (INSERT POLICE BOOTH RIDDLE HERE)
      `,
      exits: [
        { dir: 'escape', id: 'gameStart' }
      ]
    },
    {
      name: 'The Ocean Depths',
      id: 'gameStart',
      img: `

`,
      desc: `
These are new and treacherous depths. The water is freezing even through your equipment, and it is difficult to see more 5 meters in front of you. Uncertainty lies in every direction, but you must start somewhere. 

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
      img: '',
      desc: `
        You approach a majestic reef made up of deep water coral. A school of luminous fish, forever untouched by the light of the sun and unseen by human eyes up until now, swim nimbly about its glorious spires.
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
      img: '',
      desc: `
        You come across a rocky outcrop. Perched on top is an astoundingly cool rock. It is difficult to describe what makes it so cool, but it is really ultra cool, you are certain of that.
        Do you take action here or go East, West, North or South?
      `,
      exits: [
        { dir: 'east', id: 'ogPlatform' },
        { dir: 'west', id: 'fhPlatform' },
        { dir: 'north', id: 'gameStart' }   
      ]
    },
     {
      name: 'Escalator',
      id: 'escalator',
      img: '',
      desc: `
        This is the edge of oblivion. You are meant to explore uncharted territory, but there is nothing here to take note of.
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
      img: '',
      desc: `
        This is the edge of oblivion. You are meant to explore uncharted territory, but there is nothing here to take note of.
        Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'dunkinDonuts' },
        { dir: 'west', id: 'tixBooth' },
        { dir: 'south', id: 'gameStart' }     
      ]
    },
    {
      name: 'Cool Rock',
      id: 'coolRock',
      img: '',
      desc: `
        You come across a rocky outcrop. Perched on top is an astoundingly cool rock. It is difficult to describe what makes it so    cool, but it is really ultra cool, you are certain of that.
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
      desc: `
         In front of you is what you believe must be a shark, but it only loosely fits that definition as you are familiar with it. Its mouth makes up more than half of its body, and its rows of teeth are innumerable. Its fins are disproportionately small and they flail ineffectively as it moves slowly, haltingly through the water.
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
      img: '',
      desc: `
         A whale? Perhaps? If it is a whale it is a whale larger than any whale you have seen or even conceived of. In reality you have no idea at all. The size of this whale is larger than your concept of large. To try to take it all in with your eyes is to attempt the impossible. You will never know its scope.
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
      img: '',
      desc: `
         Suspended in the darkness is a translucent green plastic bottle. Litter.
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
      img: '',
      desc: `
         You find yourself lost in a forest of towering, anchored kelp. These must be as old or older than the Redwoods of California. The foreboding feeling you get when you try to look past the first few rows of plants reminds you of the fear you felt for the woods behind the house you grew up in. 
         Do you take action here or go East, West, North or South?

      `,
      exits: [
        { dir: 'east', id: 'bench' },
        { dir: 'north', id: 'escalator' }
        
      ]
    },
  ],
};
