1-


function calculateTrip(totalmiles) {
    var tripMiles = 200; //Can be changed
    return (total * tripMiles);
}

var MilesPreTrip = 50000;
var MilesTrip   = calculateTrip(MilesPreTrip);
var autoMeter   = 'Before: ' + MilesPreTrip + ' Trip: ' + MilesTrip +
    ' Total: ' + (MilesPreTrip + MilesTrip);
console.log( autoMeter);


2-
var awesomeFCC = 'Campers developers'; //Global scope
function whatIsAwesome() {
    console.log (awesomeFCC+ ' is pretty awesome.'); //Will work
}
whatIsAwesome();


3-
function whatIsAwesome() {
    var awesomeFCC = 'Campers developers'; //Local scope
    console.log ('I made a variable called awesomeFCC with a value of ' + awesomeFCC); //Will work
}
whatIsAwesome();
console.log (awesomeFCC + ' is pretty awesome.'); //Won't work


5-if/else

var age = 102;
if (age <= 70) {
  console.log ('Yay, you can drive!');
} else {
    console.log ('Sorry, you are over ' + (70 - age) +
    ' years of driving age. You can not drive for everybodys safety.');
}


6-THE IF/ELSE IF/ELSE STATEMENT

var age = 20;
if (age >= 35) {
    console.log('You can cook AND hold any responsibilty in house!');
} else if (age >= 25) {
    console.log('You can study AND work at the same time!');
} else if (age >= 18) {
    console.log('You can leave the house!');
} else {
    console.log('You can\'t leave the house, but you can
    still stay behave like teeager.');
}


7-LOGICAL OPERATORS
var pets = 5;
if (pets >=2 && pets <7) {
    console.log ('You have a reasonable number of pets');
} else {
    console.log ('you need to think about that');
}


8-WHILE LOOPS

var bottlesOfWine = 99;
while (bottlesOfWine >= 1) {
    console.log (bottlesOfWine + ' bottles of wine to design');
    bottlesOfWine = bottlesOfWine - 9;
}

9-LOOPS AND LOGIC
//Count from 1 to 50
for (var i = 1; i <= 50; i++) {
    console.log (i);
    //Says 'Buzz' after multiples of three
    if (i % 3 == 0) {
        console.log (' Buzz');
    }
    //Says 'Bang' after multiples of five
    if (i % 5 == 0) {
        console.log (' Bang');
    }
}


10-ARRAYS OF OBJECTS
var myCats = [
  {name: 'Liona',
   age: 10},
  {name: 'Damon',
   age: 2}
];

for (var i = 0; i < myCats.length; i++) {
  var myCat = myCats[i];
  console.log(myCat.name + ' is ' + myCat.age + ' years old.');
}

11-ARRAYS OF OBJECTS

var LionaTheCat = {
  age: 10,
  furColor: 'brown',
  likes: ['catnip', 'milk', 'choclates'],
  birthday: {month: 2, day: 10, year: 2005}
}

function describeCat(cat) {
  console.log('This cat is ' + cat.age + ' years old with ' + cat.furColor + ' fur.');
}

describeCat(LionaTheCat);

12-OBJECT METHODS

var DamonTheDog = {
  age: 2,
  furColor: 'blue',
  woof: function() {
    console.log('woof woof');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);
  },
};

//Call object methods using dot notation:
DamonTheDog.woof();
DamonTheDog.eat('organic dog food');
