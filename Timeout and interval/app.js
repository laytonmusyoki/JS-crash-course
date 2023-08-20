/* var timeoutID=setTimeout(function(){
    //code
},delay); */

var start=document.getElementById('start');
var stop=document.getElementById('stop');
var x=0;
var y=0;
start.addEventListener('click',function(){
    mytimeout=setInterval(function(){ 
        if(x==59){
            x=0;
            y+=1;
            document.getElementById('demo1').innerHTML=y; 
        }
        x+=1;
        document.getElementById('demo').innerHTML=x;
        
    },1000);
});
stop.addEventListener('click',function(){
    stopInterval(mytimeout)
});

setInterval(function(){
    let date= new Date()
    var clock=document.getElementById('clock');
    clock.innerHTML=
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
});