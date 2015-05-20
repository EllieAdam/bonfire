1-Trip miles
Calculate the trip miles and return autoMeter reading??
Difficulty: 1....

Ans:
function calculateTrip(totalmiles) {
    var tripMiles = 200; //Can be changed
    return (total * tripMiles);
}

var MilesPreTrip = 50000;
var triplMiles   = calculateTrip(MilesPreTrip);
var autoMeter   = 'Before: ' + MilesPreTrip + ' Trip: ' + tripMiles +
    ' Total: ' + (MilesPreTrip + tripMiles);
console.log( autoMeter);





2-AwesomeFCC
Find the awesomeFCC and return its value
Difficulty: 1....
Ans:

var awesomeFCC = 'Camper developers'; //Global scope
function whatIsAwesome() {
    console.log (awesomeFCC+ ' is pretty awesome.'); //Will work
}
whatIsAwesome();


3-whatIsAwesome
Find the awesomeFCC and return its value
Difficulty: 1....

Ans:
function whatIsAwesome() {
    var awesomeFCC = 'Campers developers'; //Local scope
    console.log ('I made a variable called awesomeFCC with a value of ' + awesomeFCC); //Will work
}
whatIsAwesome();
console.log (awesomeFCC + ' is pretty awesome.'); //Won't work


5-Driving age
Calculate the driving age with help of if/else statements.


Difficulty: 1....
Ans:

var age = 102;
if (age <= 70) {
  console.log ('Yay, you can drive!');
} else {
    console.log ('Sorry, you are over ' + (70 - age) +
    ' years of driving age. You can not drive for everybodys safety.');
}


6-Driving age
Calculate the driving age with help of if/else statements.


Difficulty: 1....
Ans:
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


7-Number of pets

Calculate the driving age with help of if/else statements.
Difficulty: 1....
Ans:

var pets = 5;
if (pets >=2 && pets <7) {
    console.log ('You have a reasonable number of pets');
} else {
    console.log ('you need to think about that');
}


8-BottlesOfWine
calculate number of bottles to design
Difficulty: 1....
Ans:

var bottlesOfWine = 99;
while (bottlesOfWine >= 1) {
    console.log (bottlesOfWine + ' bottles of wine to design');
    bottlesOfWine = bottlesOfWine - 9;
}


9-Buzz Bang
say Buzz Bang

Difficulty: 1....
Ans:
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


10-My cat
Find my cats age
Difficulty: 1....
Ans:

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

11-DescribeCat
Find out the age and fur color?
Difficulty: 1....
Ans:

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


12-DamonTheDog
What damon eats?

Difficulty: 1....
Ans:
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


13-Add a, b


Difficulty: 1....
Ans:

var add = function(a,b) {
  result = 0;
  for (var i=0; i< arguments.length; i++) {
    result += argument[i];
    return result;
  };
}
add(3,10,5,4,3,6,7,88); //??

14- animalMaker

Difficulty: 1....
Ans:
var animalMaker = function(name){
  return {
    speak : function(){
      console.log("my name is ", name)
    }
  };
};
var animalNames = ["sheep", "cow", "goat"];
var farm = [];

  for(var i=0; i< animal.length; i++) {
    farm.push(AnimalMaker(animalNames[i]));
  };

  // ??

  15-getFunc

  Difficulty: 1....
  Ans:
  function getFunc() {
    var a = 7;
    return function(b) {
        alert(a+b);
    }
}
var f = getFunc();
f(5); // ??
ans:12

FUNCTION PROBLEM
16.	Q. Write a function that takes a binary function, and makes it callable with two invocations.
addg =  applyg(add);
addg(5) (6)  //11
applyg(mul) (7) (8) // 56

Answer
function applyg(binary) {
	return function (x) {
	return function (y) {
		return binary(x, y);
};
};
};

17.Q. . Write a function that takes a function and arguments, and returns a function that can supply a second argument.
	add5 = curry (add, 5);
	add5(7)      //12
	curry(mul, 5) (7) //   35

	Answer
function curry(func, first) {
	return function (second) {
	return function (y) {
		return function(first, second);
};
};
function curry(func, first) {
	return applyf (func)(first);

};
OPTIONAL
function curry(func, …first) {
	return function (…second) {
	return function (y) {
		return function(…first, …second);
};
};
18.Q without writing any new functions, show three ways to create the inc function.
inc(7) // 8
inc(inc(7)) //9
	Answer
1.	inc = addg(1);
2.	inc = applyg(add) (1);
3.	inc = curry (add, 1);

19.Q. Write methodize, a function that converts a binary function to a method.
Number. Prototype.add =
		Methodized(add);
(4).add(5)    // 9

Answer:
function methodize (func) {
	return function (y) {
	return func(this, y);

};
}
function methodize (func) {
	return function (…y) {
	return func(this, …y);
};
}
20.Q. Write demethodize, a function that converts a method function to a binary.
Demethodize(Number.prototype.add) (5, 8) //13
Answer:
function demethodize (func) {
	return function (that, y) {
	return func.call(that, y);

};
}
function demethodize (func) {
	return function (that…y) {
	return func.apply(that, …y);
};
}
