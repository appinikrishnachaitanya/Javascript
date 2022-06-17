//ES6 begins


//1. ES6
/* 
1.var
2.let
3.const
*/

const ck =10 ;  // use it for the arrow functions

console.log(ck)

let l ;
console.log(l);


//hoisting and variable dead zone
console.log(v);
var v = 10;

(function self(){
    console.log(v);
    var v=11;
    
})();



{   
    
    let l = 1000;
    console.log(l);
   
}

console.log(l);


//Arrow functions

//Named Function
function add(x,y)
{
    console.log(x+y);
}

add();

//function unnamed

const add1= function(x,y)
{
    console.log(x+y);
}

add(10,12);

//fat arrows
const greetings = name=> console.log("Hello world" + name);
greetings(" Krishnachaitanya");

const namegreeting = name => "hello "+name;
console.log(namegreeting("Raghu "));


//Rest and Spread Operator



//Interpolations



//iterations