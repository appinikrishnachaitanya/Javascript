//comments
//console.log("Iam outer file")

//document.write("Hi iam written on the html page");


// let x = prompt("Enter the Number"); //input
// console.log(x); //output

//variables:

//Var - keyoword --> nO need define the datatype

// var x = Infinity;


//what is default value of this variables //undefined

//values?
/* 
  Number --
  boolean --
  string --
  arrays 
  null -- object
  undefined -- default value -- undefined
  object
  NaN -- number
  Infinity -- number


*/

// console.log(x);
// console.log(typeof(x));

//Numbers
//parseInt
//parseFloat
//toString
// var y =  new Number(10.2937492843);
// console.log(y.toFixed(2));
//  console.log(typeof(y));

//Boolean
// NaN,null,undefined-false
//Infinity-true

// var z = new Boolean(undefined);
// console.log(z.valueOf());

//strings
// var n = "krishna-chaitanya";
// console.log(n.slice(0,3));
/* 
toUpperCase
toLowerCase
indexOf
lastIndexOf
split
replace
replaceAll
search
slice(start,end+1)
length()
*/

//arrays
var arr = [1,2,3,4];

arr.push(1);
arr.pop();
arr.unshift(11);
arr.shift();


console.log(arr.join("-"));
var arr1 = arr;  // maintains the address of arr
//methods in array
/* 
push
pop
unshift
shift
length
join()

*/

//arrays-sorting

var arrs = [1,9,5,2,4,-1,"A",true,false,null,undefined];
console.log(arrs.sort());


//functions
/* 
1.Normal functions
2.Arrow Functions
*/

function add(a=0,b=0)
{
    // console.log(a+b);

    return a+b;
}


var r = add();
console.log(r);

//arrow

const c  = (a=0,b=0) => {
    return a+b;
}  

var l = c(1,2);
console.log(l);

