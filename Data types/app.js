// string data types

var firstName="Layton";
var lastName="Musyoki";
console.log(firstName+" "+lastName);


// Number data types
var a=10;  //integer
var b=30.34; //float
console.log(a+b);
console.log("Value of a is:"+a +" and Value of b is :"+b);


// Boolean data types
var codingIsFun=true;
var mathIsfun=false;
console.log("coding if fun "+codingIsFun +" What about Math? "+mathIsfun);


// Object data types

var mango={
    color:"Green",
    shape:"oval",
    taste:"Sweet"
};
console.log(mango.color);
console.log(mango.shape);
console.log(mango.taste);


// Arrays
var fruits=["banana","oranges","mangoes","apples"];
// Displaying All Array items
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
};
// Displaying items one by one using index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);