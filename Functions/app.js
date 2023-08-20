// function to add to numbers
function add(a,b){
    var sum=a+b;
    console.log(sum);
};
// calling a function and passing the parameters
add(12,2);
add(50,2);


//function to convert meters to kilometers
function conveter(meters){
    var answer=meters/1000;
    console.log(answer+"Km");
};

conveter(2000);//passing meters to be converted


// function to check if a number is old or even
function Checknumber(number){
    if(number%2==0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
};

Checknumber(7); //output is The number is odd
Checknumber(10); //output is The number is even


