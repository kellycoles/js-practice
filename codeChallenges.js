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

 //count the vowelsin a string
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
  findVowels("kelly")