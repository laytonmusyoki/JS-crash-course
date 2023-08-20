// forEach()

var cities=['Nairobi','Mombasa','Kisumu','Nakuru'];

cities.forEach(function(val){
    console.log(val);
});

var item=[3,4,7,28,9];
sum=0;
item.forEach(function(x){
    sum+=x;
});
console.log(sum);

// writs into strings
console.log(cities.join());

// merging arrays
var array1=['banana','mango'];
var array2=['oranges','pineaple'];

console.log(array1.concat(array2));
console.log(array1+" "+array2);

// removing items by slicing
console.log(array1.slice(1));