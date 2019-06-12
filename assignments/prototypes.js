/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

function GameObject(info) {
  this.createdAt = info.createdAt;
  this.name = info.name;
  this.dimensions = info.dimensions;
};

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};



function CharacterStats(info) {
  GameObject.call(this, info) 
  this.healthPoints = info.healthPoints;

};

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;

};



function Humanoid(info) {
  CharacterStats.call(this, info) 
  this.team = info.team;
  this.weapons = info.weapons;
  this.language = info.language;
  
};

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

/////STRETCH////

function Hero(info) {
  Humanoid.call(this, info)
  this.secretAbility = info.secretAbility;
  this.hitPoints = info.hitPoints;
};

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.proclamation = function() {
  return `I ${this.name} am here to save you!`
}

Hero.prototype.hit = function() {
  return `${this.name} has struck you ${this.hitPoints} damage`
};

Villian.prototype.hitPoints = function(min, max) {
  return Math.random() * (max - min) + min; 
};







function Villian(info) {
  Humanoid.call(this, info)
  this.secretPower = info.secretPower;
  this.hitPoints = info.hitPoints;
};

Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.proclamation = function() {
  return `I ${this.name} am here to get you!`
}

Villian.prototype.hit = function() {
  return `${this.name} has struck you ${villian.prototype.hitPoints()} damage`
};

Villian.prototype.hitPoints = function(min, max) {
    return Math.random() * (max - min) + min; 
  };







  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

/////STRETCH//////
const monster = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6,
  },
  healthPoints: 50,
  team: 'Mordor',
  weapons: [
    'Claws',
    'Sword',
  ],
  language: ['Orc', 'Elvish']
});


  const aragorn = new Hero({ 
  healthPoints: 40,
  dimensions: archer.dimensions,
  name: 'Aragorn',
  team: 'The Fellowship',
  weapons: [
    'Bow',
    'Sword',
  ],
  secretAbility: 'Army of Dead',
  language: ['Common Tongue', 'Elvish'],
  });

  const sauron = new Villian({
    healthPoints: 100,
    dimensions: monster.dimensions,
    name: 'Sauron',
    team: 'Dark Power',
    weapons: [
      'The Ring',
      'Flail'
    ],
    secretPower: 'Mindcontrol',
    language: ['Common Tongue', 'Orc', 'Elvish'],
  });



         


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(aragorn.proclamation());
  console.log(aragorn.secretAbility);
  console.log(aragorn.dimensions);
  console.log(sauron);
  // console.log(sauron.hitPoints());
  // console.log(aragorn.hitPoints());


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!