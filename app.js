// Q1
// Write a javascript program that accepts two numbers in two prompts
// and displays the larger one in the console
// var userMarks1 = +prompt("Enter a first number");
// var userMarks2 = +prompt("Enter a second number");
// if(userMarks1>userMarks2)
// {
//     console.log("The largest number is " +userMarks1);
// }
// else
// {
//     console.log("The largest numnber is "+userMarks2)
// }


// Q2
// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign

// var userMarksInput =+prompt("Enter a positive or a negative Number
//  and i will tell you the sign");

// if (userMarksInput > 0)
// {
//     alert("The sign is +");
// }
// else
// {
//     alert("The sign is -");
// }


// Q3
// // Write a javascript program that accepts five numbers in five prompts
// // and displays the larger one in the console

// var userMarks1 = +prompt("Enter a first number");
// var userMarks2 = +prompt("Enter a second number");
// var userMarks3 = parseInt(prompt("Enter a third number"));
// var userMarks4 = +prompt("Enter a fourth number");
// var userMarks5 = +prompt("Enter a fifth number");

// if(userMarks1>userMarks2 && userMarks1>userMarks3 && userMarks1>userMarks4 && userMarks1>userMarks5)
// {
//     console.log("The largest number is " +userMarks1);
// }
// else if(userMarks2>userMarks1 && userMarks2>userMarks3 && userMarks2>userMarks4 && userMarks2>userMarks5)
// {
//     console.log("The largest numnber is "+userMarks2)
// }
// else if(userMarks3>userMarks1 && userMarks3>userMarks2 && userMarks3>userMarks4 && userMarks3>userMarks5)
// {
//     console.log("The largest numnber is "+userMarks3)
// }
// else if(userMarks4>userMarks1 && userMarks4>userMarks2 && userMarks4>userMarks3 && userMarks4>userMarks5)
// {
//     console.log("The largest numnber is "+userMarks4)
// }
// else
// {
//     console.log("The largest numnber is "+userMarks5)
// }



// Q4
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen

// for(let i=0; i<=15; i++)
// {
//     if (i%2 == 0)
//     {
//     console.log(i + " is even");
//     }
//     else
//     {
//         console.log(i + " is odd");
//     }
// }

// Q5
// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

// var userMarks  = +prompt("Enter your total marks");
// if (userMarks < 100  && userMarks >= 90)
// {
//     console.log("Your Grade is A")
// }
// else if (userMarks < 90 && userMarks >= 80)
// {
//     console.log("Your Grade is B")
// }
// else if (userMarks < 80 && userMarks >= 70)
// {
//     console.log("Your Grade is C")
// }
// else if (userMarks < 70 && userMarks >= 60)
// {
//     console.log("Your Grade is D")
// }
// else if (userMarks < 60 && userMarks >= 50)
// {
//     console.log("Your Grade is F")
// }
// else
// {
//     console.log("You are fail")
// }

// Q6
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for (let i = 1; i <=100; i++) {
//     if (i%3===0 && i%5===0)
//     {
//         console.log("FizzBuzz");
//     }
    
//     else if(i%3===0)
//     {
//         console.log("Fizz");
//     }
//     else if(i%5===0)
//     {
//         console.log("Buzz");
//     }
//     else
//     {
//         console.log(i);
//     }

// }



// Q7
// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// let n = 5;
// let star = ""

// for (let i=0; i<n; i++) {
//     for (let j=0; j<=i; j++) {
//         star+= "*";
//     }
//     star+= "\n"
// }
// console.log(star);