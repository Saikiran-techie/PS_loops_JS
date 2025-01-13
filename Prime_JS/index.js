//write a code for finding prime number and take input from user 

// Method -1 :

let a = +prompt("enter a number : ");
let count = 0;

if (a >= 1) {
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log(a, "is prime number");
    }
    else {
        console.log(a, "is not a prime number");
    }
}
else {
    console.log(a, " is not a prime");
}