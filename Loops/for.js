// outputs hello 9 times
for(var i=0;i<10;i++){
    console.log('hello');
}

// outputs array items
var array=[10,3,9,2,5,7];
for(var x=0;x<array.length;x++){
    console.log(array[x]);
}

// outputs items upto 9 and loop get terminated
for(var x=0;x<array.length;x++){
    if(x==3){
        break;
    }
    console.log(array[x]);
}

// outputs items but jumps 2
for(var x=0;x<array.length;x++){
    if(x==3){
        continue;
    }
    console.log(array[x]);
}


// for of ...loop
var text="hello";
for(x of text){
    console.log(x);//outputs each character
}