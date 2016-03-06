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
Difficulty: 1....

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
  Difficulty: 1....

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
Difficulty: 1....


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
Difficulty: 1....

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

21. JavaScript events and timing.
Q In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
Difficulty: 2....

Ans:
The values will be logged in the following order:
1
4
3
2

1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay
2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.


22. Q
What will the code below output to the console and why ?
console.log(1 +  "4" + "3");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "7");
console.log(+"1" +  "1" + "5");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

Answer:
The above code will output the following to the console:
"143"
"32"
"07"
"115"
"NaN2"
NaN

Explaination:
Example 1: 1 + "4" + "3" Outputs: "143" Explanation: The first operation to be performed in 1 + "4". Since one of the operands ("3") is a string, JavaScript assumes it needs to perform string concatenation and therefore converts the type of 1 to "1", 1 + "4" yields "14". Then, "14" + "3" yields "143".

Example 2: 1 + +"2" + "2" Outputs: "32" Explanation: Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".

Example 3: 1 + -"1" + "7" Outputs: "07" Explanation: except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1 yielding 0, which is then converted to a string and concatenated with the final "7" operand, yielding "07".

Example 4: +"1" + "1" + "5" Outputs: "115" Explanation: Although the first "1" operand is typecast to a numeric value based on the unary + operator that precedes it, it is then immediately converted back to a string when it is concatenated with the second "1" operand, which is then concatenated with the final "5" operand, yielding the string "115".

Example 5: "A" - "B" + "2" Outputs: "NaN2" Explanation: Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.

Example 6: "A" - "B" + 2 Outputs: NaN Explanation: As exlained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.


23. Q What will the code below output to the console and why?
var arr1 = "jake".split('');
var arr2 = arr1.reverse();
var arr3 = "jakob".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

Asnwer:
The logged output will be:

"array 1: length=5 last=j,a,k,o,b"
"array 2: length=5 last=j,a,k,o,b"
arr1 and arr2 are the same after the above code is executed for the following reasons:

Calling an array object’s reverse() method doesn’t only return the array in reverse order, it also reverses the order of the array itself (i.e., in this case, arr1).
The reverse() method returns a reference to the array itself (i.e., in this case, arr1). As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);), arr1 will be affected as well since arr1 and arr2 are simply references to the same object.


Question:

Comparison with the Less Than Or Equal To Operator
function myTest(val) {
  if (val ) { 
    return "Smaller Than or Equal to 12";
  }
  
  if (val) { 
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

myTest(10);
Answer:

function myTest(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) { 
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

myTest(10);

Question:
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if 
and only if the operands to the left and right of it are true.
Answer:
function myTest(val) {

  if (val <= 50 && val >=25) {
   
      return "Yes";
    }

  return "No";
}

myTest(10);

Question:
 Else Statements
 Answer:
 function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
Question:
Logical Order in If Else Statements

Answer:
function myTest(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
Question:
Chaining If Else Statements
Answer:
function myTest(num) {

   if (num < 5) {
   return "Tiny";
}
  else if (num < 10 ) {
    
   return "Small";
    } 
  else if (num < 15 ) {
   return "Medium";
    } 
  else if (num < 20 ) {
   return "Large";
  }
  else if (num >= 20 ) {
   return "Huge";
    
    
} else {
  
  return "Change Me";

}
//
Question:
Multiple Identical Options in Switch Statements
Answer:
function myTest(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;  
}

Question:
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
Find temperature in Fahrenheit.
Answer:
function convert(celsius) {
  
  var fahrenheit = celsius * 9/5 + 32;
  if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}
Question:
Push ["dog", 3] onto the end of the myArray variable.
Answer:
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];


myArray.push(["dog", 3]);

convert(30);

Question:
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.
Answer:
function minusSeven(num) {
  return num - 7;
}


function timesFive(num) {
  return num * 5;
}

Q:

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1       10, 'J', 'Q', 'K', 'A'
Answer:
var count = 0;

function cc(card) {

  
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count = count +1;
      break;
      
    case 7:
    case 8:
    case 9:
      count = count + 0;
      break; 
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count = count - 1;
      break; 
    
  }
    
   if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }

8.
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
