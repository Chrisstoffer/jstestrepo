 //how to copy referene value
 // var a  = [1,2,3,4,4,5,56,6,7];
 //using spread operator (...) 
 //  var b = [...a]
 //  b.pop()
 //  var ob={name: "aniket", age:21,email:"aniketanik@gmail",ID:230241088};
 //  var ob2 ={...ob};
 

 //.................Truthy and falsy.....................

 //1) falsy = 0 false undefined null NaN doccuments.all

 // if(NaN)       //THIS CONDITION WILL BE TRUE 
 // {
 //     console.log(" condition is true")
 // }
 // else 
 // {
 //     console.log(" condition is false")
 // }


 //for each , forin, , do-while loops

 //foreach loop runs olny on array

 // var a = [11,3,34,5,6,7,8,9,6453,4,243,6,7856,8];

 // a.forEach(function(num)
 // {
 //     console.log(num)
 // }
 // )


//............to use loop in objects we use forin 

// var obj ={
//     name: "aniket anik", age: 21, email: "anikdas0902@gmail.com",
// }

// for(var x in obj)
// {
//     console.log(obj[x]);
// }

//..................callback functions...........

// setTimeout(function() {
//     console.log("hey hello what is up")
    
// }, 5000);

//..............first clss funcitons.........

//funcitons can be used as a vlaue that is the first class function



/* 3:43 - 11:13 - 1st Difference b/w Var, Let, Const
11:44 - 15:10 - 2nd Difference b/w Var, Let, Const
15:11 - 26:40 - 3rd Difference b/w Var, Let, Const
17:30 - 24:46 - Window Object
24:47 - 27:34 - Browser Context API
27:48 - 28:40 - Stack
28:41 - 30:50 - Heap Memory
30:51 - 39:56 - Execution Context
39:57 - 41:38 - Lexical Environment 
41:46 - 47:34 - How to copy reference values
47:39 - 52:43 - Truthy vs Falsy
52:44 - 53:28 - Switch Case
53:45 - 1:01:22 - ForEach Loop
1:01:23 - 1:05:47 - For in Loop
1:05:49 - 1:07:23 - Do While Loop
1:09:44 - 1:19:25 - Callback Function
1:19:26 - 1:23:42 - First Class Functions
1:23:43 - 1:27:00 - How Arrays are made behind the scenes, How we can make negative indexes arrays in JS
1:27:26 - 1:28:10 - How to delete Object Prop

*/
//...........heigher order function..........
//heigher order functions are those functions, that can take another function as parameter or retrun a function..


/*
function add(x)
{
return function(){};
}


*/
//using function as parameter 
/*
add(function(){

})
*/


//......CONSTRUCTOR FUNCTION.........
//a constructor function is a  normal function that uses "this" keyword in the funciton and during the calling time uses 
//  "new" key word is know as a constructor function.

// function xyz(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "red"

// }

// var first = new xyz();


//.............first class function.....

/* First class function are functions that can be treated as variables,,we can
save them, we can pass them as arguments.
*/

//new keyword create a blank object for the constructor function 

/*........iife => immediately invoke function expression.....
*/

//Example of iife 

var value  = (function(){

    var name = "anik"
    return { 
        getter: function(){
            console.log(name);
        },
        setter: function(x)
        {
            name = x;
        }
    }
}
) ()


//Example 2 of iife 


var pass = (function(){
var password = "!@#$%^"

return{
    getter: function(){
        console.log(password)
    },

    setter: function(y)
    {
        password = y;
    }
}
})  ()



//............prototype....


//...............prototype inheritance

var father = {
    canfly: false,
    canwalk: true,
    cantalk : true,
    hasfourlegs: false


}

var son = {
    candesign: true,
    cancode:true,
    canjump: true
}
 

son.__proto__=father;


//this keyword in the context of global value 

//console.log(this);  // it will gives window as result

//in function scope 

function abcd()
{
    console.log(this);
}
abcd();



//method scope,, a fucntion in the object is known as method

var test = {
    letstal: function(){
        console.log(this);
    }
}

test.letstal();  //in method,, this value is = object

//this keyword always refers tooo  the parent object..


//call allpy bind

