// ASSIGNMENT OPERATORS

var a=20;  //a is assigned 20
var b=10;  //b is assigned 10
var c=40;
c+=b;  //b is added to c and final value assigned to c
console.log(a);
console.log(b);
console.log(c);


//ARITHMETIC OPERATORS
// Addition,substruction,multiplication,division
var d=23;  
var f=17;
var sum=d+f;  //addition
var sub=d-f;  //substruction
var mult=d*f;  //multiplication
var div=d/f;  //division
var z=2**3;   //exponential  
d--;           //decrement 
f++;            //increment

console.log(f);//increases f to 18
console.log(d);// reduces d to 22
console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);
console.log(z);  //outputs 2*2*2 which is 8


// COMPARISON OPERATORS
var w=2;
var v=40;

console.log(w==v);   //it returns false
console.log(w>v);   // returns false
console.log(w<v);   // returns true
console.log(w!=v);   // returns true
console.log(w>=v);   // returns false
console.log(w<=v);   // returns true


// LOGICAL OPERATORS
console.log(6==6 && 4==3);   // returns false because both conditions should be true
console.log(6==6 && 4==4);   // returns true  because all conditions are true
console.log(6==6 || 4==3);   // returns true because one of the condition is true
console.log(!6==6);  // returns false
console.log(!6<4);  // returns true