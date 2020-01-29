// string char reverse without reverse method
//=============================================

let reverse = ""
let str  = 'kelly'
for(let i = str.length - 1; i >= 0; i--)
{
reverse += str. charAt(i);
}
console.log("The reversed string is:");
console.log(reverse);

//with reverse method
//=============================================
let string  = ['kelly', 'Coles']
let newstr = string.reverse();
console.log("The reversed string method string is:");
console.log(newstr);

//palindrome problem
//=====================================================
const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparison

     return str === str.split('').reverse().join('')
    
  }
 let result = palindrome ('table');
 console.log(result);

 //count the vowels in a string
 //======================================================
 const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    console.log(count);
  }
  findVowels("apple")

  // fibonacci
  //======================================================
  const fibonacci = num => {
    //     // store the Fibonacci sequence you're going
    //     // to generate inside an array and
    //     // initialize the array with the first two
    //     // numbers of the sequence
         const result = [0, 1];
      
         for(let i = 2; i <= num; i++) {
    //       // push the sum of the two numbers
    //       // preceding the position of i in the result array
    //       // at the end of the result array
           const prevNum1 = result[i - 1]
           const prevNum2 = result[i - 2]
           result.push(prevNum1 + prevNum2)
        }
        // return the last value in the result array
        console.log(result[num]);
      }
      fibonacci(6)

      