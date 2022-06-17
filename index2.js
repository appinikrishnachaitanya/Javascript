// Question 1 

function reverse1( str = "")
{    
     str = str.toLowerCase();
     var words = str.split(" ");
     let result = [];
     for(i in words)
     {
        let letters = words[i].split("");
        letters.reverse();
        let temp = letters.join("")
        result.push(temp)
        
     }
     let finalresult = result.join(" ");
     console.log(finalresult);
     
}

reverse1("Hi regex");


//question2

function appendArray(...arr)
{
    let another  =  [...arr];
    another.reverse();
    arr.push(...another);
    console.log(arr);
}

appendArray(1,2,3,4,5);

//question 3

function checkArrayObject(temp)
{
  let t = Array.isArray(temp)
  console.log(t);
}

checkArrayObject([])


//question 4:

let arrnum = [];
function calculateFrequency()
{
    arrnum[0]++;
    console.log(arrnum[0]);
}

calculateFrequency()


//question 5:
var obj = {
    Name: "regex",
    Age:30,
    Kids: [
        {
            Name: "regex2",
            Age: 20,
            Kids:[],
        },
        {
            Name: "regex3",
            Age: 50,
            Kids: [
                {
                    Name: "regex4",
                    Age: 20,
                    Kids: [
                        {
                            Name: "regex5",
                            Age: 12,
                            Kids: [],		
                        }
                    ]
                }
            ]
        }
    ]
    }
    
   
   let age = 0;
   function iteratorObjec(target)
   {
      if(typeof(target) === 'object')
      {
          for(const key in target)
          {
              iteratorObjec(target[key]);
          }
      } 
      else
      {
          console.log(target)
      }
   }

   iteratorObjec(obj);