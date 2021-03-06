// string char reverse without reverse method
//=============================================

let reverse = ""
let str = 'kelly'
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
}
console.log("The reversed string is:");
console.log(reverse);

//with reverse array method
//=============================================
let string = ['kelly', 'coles']
let newstr = string.reverse();
console.log("The reversed string method string is:");
console.log(newstr); // returns[coles, kelly]

//reverse string with split/reverse/join
//===================================================================
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

// reverseString("hello");

// The above solution in a more concise way
//===========================================================================
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

//palindrome problem
//=====================================================
const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparison: true or false

    return str === str.split('').reverse().join('')

}
let result = palindrome('table');
console.log(result);

//count the vowels in a string
//======================================================
const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    console.log(`There are ${count} vowels in the string.`);
}
findVowels("apple")

// Fibonacci
//======================================================
const fibonacci = num => {
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1];

    for (let i = 2; i <= num; i++) {
        // push the sum of the two numbers
        // preceding the position of i in the result array
        // at the end of the result array
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    console.log(`Fibonacci(${num}) is ${result[num]}`);
}
fibonacci(6)

// Fibonacci- the recursive approach:
//======================================================

const Fibonacci = number => {
    // if num is either 0 or 1 return num
    if (number < 2) {
        return (number)
    }
    // recursion here
    return (Fibonacci(number - 1) + Fibonacci(number - 2));
}
let theFibonacci = Fibonacci(5);
console.log(theFibonacci);
console.log(`The fibonacci number is ${theFibonacci}`);

// Fiz Buzz
//==================================================================
const fizzBuzz = num => {
    for (let currentNumber = 1; currentNumber <= num; currentNumber++) {

        let output = `${currentNumber}: `

        if (currentNumber % 5 === 0) {
            output += "Fizz"
        }

        if (currentNumber % 7 === 0) {
            output += " Buzz"
        }

        console.log(output)
    }
}
fizzBuzz(40);
//===========================================================
// chess board
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
//===================================================================
//looping a triangle
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
//=========================================================
// min value in an array using rest parameter
//Rest parameters are essentially a convenient shorthand for Function.prototype.apply
const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min)
// same as:
var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var min = Math.min.apply(Math, arr)
console.log(min)