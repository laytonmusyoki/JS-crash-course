var person={
    name:"Layton",
    age:18,
    city:"Nakuru",
    hobbies:['coding','watching','swimming'],
    course:"Computer Science",
};

// ways to access object's properties
/* 
By use of Dot Notation
    person.age
By use of Bracket Notation
    person["age"]

*/
console.log(person) ; //outputs all the data
console.log(person.age);  //outputs 18
console.log(person["age"]); //outputs 18
console.log(person.hobbies[2]); //outputs swimming


// Object in an object
var person={
    name:"Layton",
    age:18,
    city:"Nakuru",
    hobbies:['coding','watching','swimming'],
    course:"Computer Science",
    studies:{
        university:"Kabarak University",
        year:"Year two",
        skills:['Python','php','Javascript','MySQL','Html','Css'],
    }
};

// accessing javascript
console.log(person.studies.skills[2]);


// converting to lower and upper cases
const strng="That place was cool";
const text="HELLO BRO";
console.log(text.toLowerCase());
console.log(strng.toUpperCase());