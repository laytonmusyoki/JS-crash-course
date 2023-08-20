var x=['mango','banana',45,'oranges',34,23];

// accessing array item using index
console.log(x[3]);  //outputs oranges


// output all array items
for(var i=0;i<x.length;i++){
    console.log(x[i]);
}

// adding items in an array
x.push('apples');         //adds item at the end of an array
x.unshift('pineapple') ;//adds item at the begining of an array

for(var i=0;i<x.length;i++){
    console.log(x[i]);
}

// removing items from an array
x.pop(); //removes last item
x.shift() //removes first item
for(var i=0;i<x.length;i++){
    console.log(x[i]);
}