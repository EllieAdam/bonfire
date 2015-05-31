1
Question: Trip miles
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





2.
Question: AwesomeFCC
Find the awesomeFCC and return its value
Difficulty: 1....
Ans:

var awesomeFCC = 'Camper developers'; //Global scope
function whatIsAwesome() {
    console.log (awesomeFCC+ ' is pretty awesome.'); //Will work
}
whatIsAwesome();


3.
Question: whatIsAwesome
Find the awesomeFCC and return its value
Difficulty: 1....

Ans:
function whatIsAwesome() {
    var awesomeFCC = 'Campers developers'; //Local scope
    console.log ('I made a variable called awesomeFCC with a value of ' + awesomeFCC); //Will work
}
whatIsAwesome();
console.log (awesomeFCC + ' is pretty awesome.'); //Won't work


5.
Question: Driving age
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


6
Question: Driving age
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


7
Question: Number of pets

Calculate the driving age with help of if/else statements.
Difficulty: 1....
Ans:

var pets = 5;
if (pets >=2 && pets <7) {
    console.log ('You have a reasonable number of pets');
} else {
    console.log ('you need to think about that');
}


8
Question:
BottlesOfWine
calculate number of bottles to design
Difficulty: 1....
Ans:

var bottlesOfWine = 99;
while (bottlesOfWine >= 1) {
    console.log (bottlesOfWine + ' bottles of wine to design');
    bottlesOfWine = bottlesOfWine - 9;
}


9.
Question Buzz Bang
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


10
Question: My cat
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

11
Question: DescribeCat
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


12
Question: DamonTheDog
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


13 Question
Add a, b


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

14 Question :animalMaker

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
16.
Q. Write a function that takes a binary function, and makes it callable with two invocations.
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

17.
Q.  Write a function that takes a function and arguments, and returns a function that can supply a second argument.
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
18.
Q without writing any new functions, show three ways to create the inc function.
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
20.
Question: Write demethodize, a function that converts a method function to a binary.
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
Question : In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?


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


22.
Question :
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

24.
Question . What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=674;
a[c]=489;

console.log(a[b]);

Answer:
The output of this code will be 489 (not 674).

The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

25.
Question . What would the following lines of code output to the console?

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

Answer
The code will output the following four lines:

0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.
The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied. If this boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.
The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. If this boolean value is “ture”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

However, the interesting thing with the && operator os that when an expression is evaluated as “true”, then the expression itself is returned. This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so. This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1).

26.
Question . What will the following code output to the console:

console.log((function f(n){
  return ((n > 1) ? n * f(n-1) : n)
  })(10));

answer.
The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).

Here’s why:

The named function f() calls itself recursively, until it gets down to calling f(1) which simply returns 1. Here, therefore, is what this does:

f(1): returns n, which is 1
f(2): returns 2 * f(1), which is 2
f(3): returns 3 * f(2), which is 6
f(4): returns 4 * f(3), which is 24
f(5): returns 5 * f(4), which is 120
f(6): returns 6 * f(5), which is 720
f(7): returns 7 * f(6), which is 5040
f(8): returns 8 * f(7), which is 40320
f(9): returns 9 * f(8), which is 362880
f(10): returns 10 * f(9), which is 3628800

27.
Question : Hoisting
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
Answer.

function test() {
   var a;
   function foo() {
      return 2;
   }

   console.log(a);
   console.log(foo());

   a = 1;
}

test();


28.
Question:
write a sum() function that accepts any number of arguments, and returns their sum.

function sum() {
  var i, l, result = 0;
  for (i = 0, l = arguments.length; i < l; i++) {
    result += arguments[i];
  }
  return result;
}
sum(1,2,3); // 6


Answer:
var data = [1,2,3];
sum.apply(null, data); // 6

sum(1,2,3); // 6

29.
Question: What will be the output of the following statements?

Code
Hide   Copy Code
var myString = 'Vicky' // Create a primitive string object.
var myStringCopy = myString; // Copy its value into a new variable.
var myString = null; // Manipulate the value
console.log(myString, myStringCopy);
Ans: // Logs 'null Vicky'


30.
Question: fibonacci function

var fibonacci = function (n) {
    return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(10));
//“To end the recursion, we will add the special cases by replacing the body of fibonacci function.”

switch (n) {
    case 0: return 0;
    case 1: return 1;
    default: return fibonacci(n - 2) + fibonacci(n - 1);
}

31.Closures
Question: return favoriteGame?
var gameTime = "everyDay";
//call ballGame inside favoriteGame
Answer:
var gameTime = "everyDay";

function fn() {
  var soccer = "funGame";
  console.log(soccer);
  console.log(gameTime);
}

function favoriteGame () {   //Closures
  var baseball = "super";
  function  ballGame () {
    var tball = "awesome";
    return baseball + tball;
  }
  console.log(ballGame());
}
favoriteGame();



Second Method of doing same problem other way around.
var gameTime = "everyDay";

function fn() {
  var soccer = "funGame";
  console.log(soccer);
  console.log(gameTime);
}

function favoriteGame () {   //Closures
  var baseball = "super";
  return function  ballGame () {
    var tball = "awesome";
    return baseball + tball;
  }

}
var ballGame = favoriteGame();

console.log(ballGame());



32.Closures
Question: find the secret password?
function createPerson() {
  return(correctPassword === ??) ?
  console.log(name.getSeret('Password')); // false
  console.logname.getSeret('Password')); // true
}:

Answer:

function createPerson() {
  var correctPassword = "somePassword";
  return {
    name: "bruno",
    getSecret: function (password) {
      return (correctPassword === password) ? "my secret" : false;
    }
  };
}

var bruno = createPerson();

console.log(buruno.getSeret('hgty')); // false
console.log(buruno.getSeret('somePassword')); // true

33.
Question: How would you compare two objects in JavaScript?
Answer:
Equality check will check whether two objects have same value for same property.

function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

34.
Question: What will the code below output to the console.log and why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

Answer:
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar


1. In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

2. In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function.
3. whereas the reference to the local variable self remains in scope and is accessible there.
