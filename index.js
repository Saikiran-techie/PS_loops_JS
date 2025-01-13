
// function creation

function movie() {
    a = {
        hero_name: "Ram Charan",
        movie_name: "Game changer",
        director_name: "Shankar",
        plotof_movie: "Political drama"
    }
    console.log(a)
}

movie();




///////////////////////////////////////////////  Problem Solving in JS  //////////////////////////////////////////////////////////
                                   
                                                    //  for loop 

// Write a program to print  1 - 10

num = 10
for (var i = 1; i <= num; i++) {
    console.log(i);
}

//  10 - 1

for (var i = num; i >= 1; i--) {
    console.log(i);
}

// - 1 to - 10

n1 = -10
for (var i = -1; i >= n1; i--) {
    console.log(i);
}

//  - 10 to - 1

for (var i = n1; i <= -1; i++) {
    console.log(i);
}


                                    //  while loop

// Write a program to print  1 - 10

i = 1 
while (i <= 10){
    console.log(i);
    i++;
}

// 10 - 1

i2 = 10
while (i2 >= 1) {
    console.log(i2);
    i2--;
}

// - 1 to - 10

i3 = -1
while (i3 >= -10) {
    console.log(i3);
    i3--;
}

//  - 10 to - 1

i4 = -10
while (i4 <= -1) {
    console.log(i4);
    i4++;
}


// Take userInput and Print even numbers and odd numbers using while loop and print sum of even and sum of odd numbers from userInput

var user = prompt("Enter a range")
var j = 0;
while (j<=user) {
    if (j % 2 == 0) {
        console.log(j + " is even");
    } else {
        console.log(j + " is odd");
    }
    j++;
}
// sum of even and odd numbers
var sumEven = 0;
var sumOdd = 0;
var k = 0;
while (k<=user) {
    if (k % 2 == 0) {
        sumEven += k;
    } else {
        sumOdd += k;
    }
    k++;
}
console.log("Sum of even numbers is " + sumEven);
console.log("Sum of odd numbers is " + sumOdd);


// Take userInput a number and using while loop, print sum of even and sum of odd numbers in userInput

var userInput = prompt("enter a digit");

var sumEven = 0
var sumOdd = 0
var a = 0
while(a <= userInput.length-1){
    var digit = parseInt(userInput[a])
    if(digit % 2 == 0){
        sumEven += digit
    }
    else{
        sumOdd += digit
    }
    a++
}
console.log("sum of even numbers is " + sumEven)
console.log("sum of odd numbers is " + sumOdd)

// product of even and odd numbers

var prEven = 1
var prOdd = 1
var b = 0
while (b <= userInput.length - 1) {
    var digit = parseInt(userInput[b])
    if (digit % 2 == 0) {
        prEven *= digit
    }
    else {
        prOdd *= digit
    }
    b++
}
console.log("Product of even numbers is " + prEven)
console.log("Product of odd numbers is " + prOdd)

