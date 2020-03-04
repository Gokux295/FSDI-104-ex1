//alert("Hello...W0rld");

//prompt("enter your name ")
/*console.log("my first message on console");

var x=10;
let y=20;
const name="chad";

console.log(name)
x="chadtatur"
console.log(x);
y = 100.70;
console.log(y);

var sentence = 'Cohort 7';

console.log(sentence);
sentence="the best " + sentence + "ever";
//sentence=sentance.replace('best','worst');

console.log(sentence);

var num1=parseInt (prompt("enter num1"));
var num2=parseInt(prompt("enter num2"));

var sum=num1+num2;
console.log(sum);
var rest=num1-num2;
console.log(rest);
var mult=num1*num2;
console.log(mult);
var div=num1/num2;
console.log(div);

var user=prompt("Name:");
alert('Welcome ' + user);

document.getElementById('division')
.innerHTML=`Num1 1 = ${num1} <br> <br> Num 2=${num2}`

//" Num1 = "+ num1 + "<br> <br> " + "Num2 = " +num2 +"<hr>";


for(var i=0; i<=10; i++){

  console.log("Hello JS");
}*/
 
//var email = prompt("enter your email");
//var n = email.includes('@');

var number1= parseInt (prompt("enter number 1"));
var number2= parseInt (prompt("enter number 2"));

if(number1>number2){
  console.log("first is greater than second")
}
else if(number2>number1){
  console.log("number 2 is larger than number 1 ")
}
else{
  console.log("equal")
}

//arrays 
let names=['chad','marlo','marquis','zach','michel','jim','dwight','pam'];
console.table("names");
var ages=[30,32,34,22,20,50,60,75]
var position=3;
for(position=0;position<8;position++){
alert(names[position] + " "+ages[position]);
}


var days = ['mon','tues','weds','thurs','friday','sat','sun'];
console.table(days);

var matrix = new ArrayBuffer(4);

for(var j=0;j<4;j++)
matrix[j]=new Array(2);

matrix[0][0]=10;
matrix[0][1]=1;
matrix[1][0]=12;
matrix[1][1]=2;

console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);

//var number=10;
//var string="10.00";

//console.log(n);

//if(number==string){
  //console.log("yes");

  var arrary1 = [2, 56, 3, 41, 0, 4, 100, 23];

  function average(){
  var length = 0;
  var sum = 0;
  var avg = 0;
  
  for(var j=0; j<Array.length; j++);{
  
    if(arrary1[j]){
      length++;
      sum+=arrary[j]
      console.log(length);
      console.log(sum);
  
    }else{
      break;
    }
  }
  
  var avg = total / count;
   
  console.log(avg)
  
  }


