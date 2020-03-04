//functions

var num1=10;
var num2=20;


let Sum = (x,y) => x+y

let result=Sum(num1,num2);
Mul(result);

function Mul(number){

console.log(2*number);

}
//arrow function 
let traveling = destination => 'travel to ....' + destination;


var travel = traveling('italy');
console.log(travel);

const logged=true;

/*if(logged){welcome to the site ');
  
}
else{ 
  console.log('please log in')
}*/

console.log(logged ? 'welcome to the site ' : 'please log in ')


/*var total=1000
//var cash = parseInt(prompt('Cash'));
//var card = prompt('Credit card');
var credit;

switch(card){

    case 'true':
      credit=true;
        break;
    case 'false':
      credit=false;
        break;
    default:
      console.log('invalid option ')
        break;

}

function payment(cash,total,card){



if (cash>total){

  console.log('successfull transaction')
}

else if(card){

  console.log('you paid with a credit card');
}

else{

  console.log('Failure');
}
}

//payment(total,cash,credit);*/

let hour=22;

if(hour>0 && hour<=12){

  console.log('good morning');


}

else if(hour>12 && hour<=18){

  console.log('Good afternoon')
}

else if(hour>18 && hour <=24){

console.log('good evening');
}

else{
  console.log('not valid hour');
}

