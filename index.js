// console.log("Hello World");

// age=19
// if(age>18){
//     document.write("Eligible to Vote")
// }else{
//     document.write("Not Eligible to Vote")
// }

// var grade = 'A';
//     document.write("<br/>Entering switch block<br />");
//     switch (grade) {
//         case 'A': document.write("Good job<br />");
//         case 'B': document.write("Pretty good<br />");
//         case 'C': document.write("Passed<br />");
//         case 'D': document.write("Not so good<br />");
//         case 'F': document.write("Failed<br />");
//         default: document.write("Unknown grade<br />")
//     }
//     document.write("Exiting switch block");

// var grade = 'C';
// document.write("Entering switch block<br />");
// switch (grade) {
    

//     case 'B': document.write("Pretty good<br />");
//     break;

//     case 'C': document.write("Passed<br />");
//     break;

//     case 'D': document.write("Not so good<br />");
//     break;

//     case 'A': document.write("Good job<br />");
//     break;

//     case 'F': document.write("Failed<br />");
//     break;

//     default:  document.write("Unknown grade<br />")
// }
// document.write("Exiting switch block");


// n=10
// while (n>0){
//     document.write("Hello<br/>");
//     n-=1
// }


// for(i = 0; i <br 4; i++) {

//     for(j = 0; j < i+1; j++) {
//         document.write("* ");
//     }
//     document.write("<br />");
// }

// word="Elluminati"
// for (chr in word){
//     document.write(word[chr] ,"-", chr)
// }

// function sayHello() {
//     alert("Hello there");
//     // document.write("Hello word fnx")
//     console.log("Hello word fnx")
//  }

//  function changeColor(){
//      document.getElementById("demo").innerHTML = "Hello JavaScript";
//     document.getElementsById('demo').changeColor = "Red";
//  }

// document.getElementById("demo").innerHTML = 5 + 6;
// // window.alert(`5+6 = ${5+6}` );

// let x=10
// console.log(x)
// console.log(++x)

// // console.log(x++)
// // console.log(x)

// // let nanme="Ramesh"

// // let nanme = new String("Ramesh");
// // console.log(typeof nanme)

// fname="Prashant"
// lname="Rai"
// // console.warn(`My first name is ${fname} and last name is ${lname}`)

// const employee = {
//     first:"Dipesh",
//     last: "Malvia",
//     fullName: function() {
//         return `${this.first} and ${this.last}`;    
//     }
// }
// console.log(employee.fullName())

// // console.log(this)

// const test = {
//     prop: 42,
//     func: function() {
//       return this.prop;
//     },
//   };
  
//   console.log(test.func());
//   // Expected output: 42
  

//   function redirect() {
//     window.location = "https://www.google.com";
//     // https://www.google.com/
//   }

//   function Warn() {
//     alert ("This is a warning message!");
//     document.write ("This is a warning message!");
//   }

//   function printBtn() {
//     window.print()
//   }

//   document.write("This is test");

//   let y = BigInt(12)
//   let z =10
//   console.log(y+z)

  var a=10,b=20,c="Test";
  var linebreak = "<hr />";

  document.write("a+b+c =",a+b+c)
  document.write(linebreak)
  document.write(typeof(linebreak));


  	
  // ? : (Conditional )
  (10>2 ) ? console.log("Sucecss") : console.log('FAILURE')
  document.write("</br>")


  let age =40
  switch (age) {
    case (age<18): document.write("Minor Not a Voter")
    break;
    case (age>=18 && age<40): document.write("Adult Voters")
    break;
    case (age>=40 && age<60): document.write("Seniors Voters")
    break;
    default: document.write("Senior Citizen")
  }

  let i=1;
  for(;;){
    if (i>5){
      // document.write(i)
      break;
    }
    document.write(i)

    i++;
  }

  let money=[100,200,400,"Manila"]
  for (paisa in money){
    document.write(linebreak)
    document.write(money[paisa])
  }

function hello(word) {
  alert("welcome")
  prompt("Enter the age")
  confirm("Are you sure to deleyte")
  window.location = "navbar.html"
}

// hello("dog")

class dog{
  constructor(bark2, colr2) {
    this.bark1 = bark2;
    this.colr1 = colr2;
  }

}

let dog1 = new dog("yes", "black");
let dog2 = new dog("No", "white");

document.write(dog2.bark1, dog2.colr1)
document.write(dog1.bark1, dog1.colr1)

function bmi() {
  const weight = prompt("Enter your Weight in KG")
  const height = prompt("Enter your Height in Meter")
  
  BMI= weight / (height * height)
  let n = BMI.toFixed(2);
  console.log(BMI.toFixed(1))
  console.log(`My Height is ${height}mtr and weight is ${weight}kg and BMI is ${n}`)
  
  console.log(Math.round(BMI*100))
}
// bmi()


function mydate() {
  const date = new Date()
  console.log(date)
  console.log(date.getDate())
  console.log(date.getMonth())
  console.log(date.getUTCMonth())
  console.log(date.getFullYear())
  console.log(date.getDay())
  console.log(date.getHours())
  console.log(date.getTime())
  // console.log(date.ge())
  // console.log(Date.parse())
  
}
// mydate()



function myfunc(){
  var a = 100;
  try{
    console.log("the value is: "+s)
  }
  catch(error){
    console.error(error.description)
  }
  finally{
    console.log("come")
  }
 
}
// myfunc()

function myFunc() {
  var a = 100;
  var b = 10;
  
  try {
     if ( c == 0 ) {
        throw( "Divide by zero error." ); 

     } else {
        var c = a / d;
        console.log(c.description)
     }
  }
  catch ( e ) {
     alert("Error: " + e );
     console.log(e.description)
     
  }
}

// myFunc()


window.onerror = function wxx() {
  // alert("An error occurred.");
  console.log("error")
}

// wxx()

window.onerror = function (message, file, line, column, error) {
  console.error(message, file, line, column, error);
  // alert(message, file, line, column, error);
};


// Form validation code will come here.
function validate() {

  if (document.myForm.Name.value == ""){
    alert("Hello, Input required")
    document.myForm.Name.focus();
    return false;
    
  }
  if( document.myForm.EMail.value == "" ) {
     alert( "Please provide your Email!" );
     document.myForm.EMail.focus() ;
     return false;
  }
  if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
     document.myForm.Zip.value.length != 5 ) {
     
     alert( "Please provide a zip in the format #####." );
     document.myForm.Zip.focus() ;
     return false;
  }
  if( document.myForm.Country.value == "-1" ) {
     alert( "Please provide your country!" );
     return false;
  }
  return( true );
}


function validateEmail() {
  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Please enter correct email ID")
     document.myForm.EMail.focus() ;
     return false;
  }
  return( true );
}

function emialvalidat() {
  var emailid = document.myForm.EMail.values;
  attherate = emailid.indexOf("@")
  dot = emailid.lastIndexOf('.')

  if (attherate< 2|| dot - attherate< 2){
    alert("write proper email formaat")
    document.myForm.EMail.focus();
    return false
  }
}

// setTimeout(function hell() {
//   console.log("Hello")
// }, 1000)

// setTimeout(hell(), 1000)

function sayHelo(){
  console.log("mr. Gami")
}

// setTimeout(sayHelo, 5000)
// setInterval(sayHelo, 1000)

let timeoutId = setInterval(sayHelo, 1000);
if (false){
  clearTimeout(timeoutId);
}



// var imgObj = null;    
// function init() {
//     imgObj = document.getElementById('box');
//     imgObj.style.position= 'relative'; 
//     imgObj.style.left = '0px'; 
// }
// function moveRight() {
//     imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
// }

// window.onload = init;



var imgObj = null;    
var animate;

function init() {
    imgObj = document.getElementById('box');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
    imgObj.style.right = '0px'
}

function moveleft() {
  imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    animate = setTimeout(moveleft, 20)
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    animate = setTimeout(moveRight, 20)
}



function stop() {
  clearTimeout(animate)
  // imgObj.style.left = '0px'
}
window.onload = init;