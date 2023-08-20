var str="How are You doing Layton? am doing good";
// str length
console.log(str.length);
// index
console.log(str.lastIndexOf('doing')); //last occurence
console.log(str.indexOf('doing'));//returns index of first occurence
console.log(str.search('doing'));// works same as indexOf
console.log(str.substring(4));//removes How and prints the rest
console.log(str.substr(4));//removes How and prints the rest
console.log(str.slice(4));//removes How and prints the rest
console.log(str.replace(/doing/g,"fairing"));//removes How and replace with Hi
console.log(str.search(/you/i));//bypass case sensitivity

var a=20;
var name="Layton";
var b;
var c=true;
var hobbies=['coding','swimming'];
var x=name[3];
console.log(x); // prints t

console.log(typeof(a));  //returns a number
console.log(typeof(name));  //returns a string
console.log(typeof(b));  //returns undefined
console.log(typeof(c));  //returns a boolean
console.log(typeof(hobbies));  //returns object