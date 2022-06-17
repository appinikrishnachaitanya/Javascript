// this is javascript // this is line comment
/*  
 this is multi line comment
*/

//output inside of the javascript
// console.log("Hello world");

//variables
var x  =20;
var y= 24.567;
var z = 'K';
var t = false;
var r=null;
// console.log(typeof(r));

//infinity
// console.log(typeof(1/0))

//NaN
// console.log(typeof(NaN));

//typeof is operator

//datatypes
/* 
 1.Number -- infinity,NaN
 2.String
 3.boolean
 4.Object
*/

//Number
var  i  =10;
// var iob = new Number(10);
// console.log(typeof(iob));

//Boolean --> 1,2,3,4,undefind,NaN,null;
// var b = new Boolean(undefined);
// console.log(b.valueOf());


//Strings
/*
toLowerCase()
toUpperCase()
length
replace
replaceAll
search
indexOf
lastIndexOf
slice(start,end+1)
split(" ")
*/
var str = "krishna Chaitanya";
// console.log(str.toString());

//Number Methods
/*
parseInt
parseFloat
*/
var strn = "10.983";
var numbers = parseFloat(strn);
console.log(numbers);


//arrays
var arr1 = [1,4,2,3];
// var arr2 = arr1;
// arr2.reverse();
// console.log(arr1);
/* 
1.push --> adding element
2.pop() ---> remove the element
3.shift()
4.unshift()
5.reverse()
6.join()
7.sort()
8.indexOf
9.lastIndexOf
10.sort
11.slice //new array
12.splice //modifying the existing array
*/
// arr1.shift();
// console.log(arr1.splice(0,2,11,12));
// console.log(arr1)



//iteration through array:
var numarr =  [ 1,2,3,4,5,6];
console.log(numarr);
//iterate
//for
// for(var i=0; i<numarr.length; i++)
// {
//     console.log(numarr[i]);
// }

// for(x of numarr)
// {
//     console.log(x);
// }

// for(x in numarr)
// {
//     console.log(numarr[x]);
// }
// var i=0;
// while(i!=numarr.length)
// {
//     console.log(numarr[i])
//     i++;
// }


//functions

function add(x=0,y=0)
{
    console.log(x+y);
}

add();

//arrow functions
// it allows us to pass the functions as the variables
var v = (x,y) => {
    
    console.log(x+y);
}

var z = v;
z(4,5);

//self invoving function 
(function firstworld()
{
   console.log("hello world");
}())


//arrays

var arr





//sets 








//maps







//higher order functions
//foreach
//map
//filter






//objects



//ES6 begins


//1. ES6
/* 
1.var
2.let
3.const
*/

const ck =10 ;  // use it for the arrow functions

console.log(ck)

let l = 11;
console.log(l);


//hoisting and variable dead zone
console.log(v);
var v = 10;

(function self(){
    var v=11;
    console.log(v);
})();



{
    let l = 1000;
    console.log(l);
}

console.log(l);