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