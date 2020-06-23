
//////////////////////////////////////////////////////////////Chapter 21-25//////////////////////////////////////////////////////////
/*
//task1//
var firstName=prompt("Enter first name");
var lastName=prompt("Enter last name");
var fullName=firstName + lastName;
alert("Hello " + fullName);
*/


/*
//task2//
var favPhone=prompt("Enter your favorite mobile phone model");
document.write("My favorite phone is: " + favPhone);
str=favPhone.length;
document.write("<br\>Length of string: " + str);
*/



/*
//task3//
var text="Pakistani"
var res=text.indexOf('n');
document.write("String: " + text);
document.write("<br\>Index of 'n': " + res);
*/

/*
//task4//
var text="Hello World"
var res=text.lastIndexOf('l');
document.write("String: " + text);
document.write("<br\>Last Index of 'l': " + res);
*/

/*
//task5//
var text="Pakistani"
var res=text.charAt(3);
document.write("String: " + text);
document.write("<br\>Character at index 3: " + res);
*/



/*
//task6//
var str1=prompt("Enter first name");
var str2=prompt("Enter last name");
var fullName=str1.concat(str2);
alert("Hello " + fullName);
*/

/*
//task7//
var text="Hyderabad";
var res=text.replace("Hyder","Islam");
document.write("City: " + text);
document.write("<br\>After replacement: " + res );
*/



/*
//task8//
var text="Ali and Sami are best friends. They play cricket and football together";
var res=text.replace("and","&");
document.write("Message: " + text);
document.write("<br\>After replacement: " + res );
*/


/*
//task9//
*/

/*
//task10//
var text="peanuts";
var res=text.toUpperCase(text);
document.write("User input: " + text);
document.write("<br\>Upper case: " + res );
*/

/*
//task11//
*/

/*
//task12//
*/

/*
//task13//
*/

/*
//task14//
*/

/*
//task15//
*/

/*
//task16//
*/

/*
//task17//
var text="Pakistan";
var res=text.charAt(7);
document.write("User input: " + text);
document.write("<br\>Last character of input: " + res);
*/

/*
//task18//
var text="The quick brown fox jumps over the lazy dog";
document.write("Text: " + text);
*/


//////////////////////////////////////////////////////////////Chapter 26-30//////////////////////////////////////////////////////////

/*
//task1//
var num=prompt("Enter a positive floating point: ");
document.write("number: " + num);
var round= Math.round(num);
document.write("<br\>round off value: " + round);
var floor = Math.floor(num);
document.write("<br\>floor value: " + floor);
var ceil= Math.ceil(num);
document.write("<br\>ceil value: " + ceil);
*/

/*
//task2//
var num=prompt("Enter a negative floating point: ");
document.write("number: " + num);
var round= Math.round(num);
document.write("<br\>round off value: " + round);
var floor = Math.floor(num);
document.write("<br\>floor value: " + floor);
var ceil= Math.ceil(num);
document.write("<br\>ceil value: " + ceil);
*/

/*
//task3//
var num=-4;
document.write("The absolute value of -4 is " + Math.abs(num));
*/

/*
//task4//
*/

/*
//task5//
*/

/*
//task6//
*/

/*
//task7//
*/

/*
//task8//
*/


//////////////////////////////////////////////////////////////Chapter 31-34//////////////////////////////////////////////////////////
/*
//task1//
var rightNow = new Date();
document.write(rightNow);
*/

/*
//task2//
var  monthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
 var now = new Date();
var theMonth = now.getMonth();
 var nameOfMonth = monthNames[theMonth];
 document.write("Current month: " + nameOfMonth);
*/

/*
//task3//
var  dayNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
 var now = new Date();
var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 document.write("Today is " + nameOfToday);
 */

/*
//task4//
var  dayNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
 var now = new Date();
var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 if(nameOfToday == "Sat" || "Sun"){
    document.write("Its Fun Day");
 }
*/


/*
//task5//
var d = new Date();
var currentDate = d.getDate();
document.write("Current date: " + currentDate);
if(currentDate < 16){
    document.write("<br\>First fifteen days of the month");
}
else if(currentDate >= 16){
    document.write("<br\>Last days of the month");
}
*/


/*
//task6//
*/

/*
//task7//
var d = new Date();
var currentHour = d.getHours();
document.write("Current hour: " + currentHour);
if(currentHour < 12){
    document.write("<br\>It's AM");
}
else if(currentHour > 12){
    document.write("<br\>It's PM");
}
*/

/*
//task8//
*/

/*
//task9//
*/

/*
//task10//
*/

/*
//task11//
*/

/*
//task12//
*/


/*
//task13//
var age=prompt("What is your age?");
var currentYear=2020;
var birthYear=currentYear - age;
document.write("Your age is: " + age);
document.write("<br\>Your birth year is: " + birthYear);
*/



/*
//task14//
var name=prompt("Enter customer name");
 document.write("Customer name:  " + name)
 var  monthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
 var now = new Date();
var theMonth = now.getMonth();
 var nameOfMonth = monthNames[theMonth];
 document.write("<br\>Current month: " + nameOfMonth);
 var noOfUnits=prompt("Enter number of units");
 document.write("<br\>Number of units: " + noOfUnits);
 var chargesPerUnit=16;
 document.write("<br\>Charges per unit: " + chargesPerUnit);
 var netAmountPayable= noOfUnits * chargesPerUnit;
 document.write("<br\>Net Amount Payable (within Due Date): " + netAmountPayable);
 var latePaymentSurcharge=350;
 document.write("<br\>Late Payment Surcharge: " + latePaymentSurcharge);
var grossAmountPayable= netAmountPayable + latePaymentSurcharge;
document.write("<br\>Gross Amount Payable (after Due Date): " + grossAmountPayable);
*/

//////////////////////////////////////////////////////////////Chapter 35-38//////////////////////////////////////////////////////////
/*
//task1//

*/


/*
//task2//
var firstName=prompt("Enter first name");
var lastName=prompt("Enter last name");
function greetUser() {    
  document.write("Hello, there."); 
 } 
 answer=greetUser();
 document.write(answer + firstName + lastName );
*/

/*
//task3//
var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
function add(num1,num2){
  return num1 + num2;
}
answer=add(num1,num2);
document.write("The sum of two numbers" + answer);
*/

/*
//task4//
*/




/*
//task5//
var number=prompt("Enter number");
function square(number) {
    return number * number;
  }
answer=square(number);
document.write("The square of " + number + " is " + answer);
*/

/*
//task6//
var n=prompt("Enter number");
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);
*/

/*
//task7//
var  FirstNumber=prompt("enter first no");
var  SecondNumber=prompt("enter second no");

function sum() {
    var result = 0;
    for (var i = FirstNumber; i <= SecondNumber; i++) {
      result += i;  
    }
    answer=sum();
    document.write(answer);
}
*/


/*
//task8//
*/

/*
//task9//
var a=prompt("Enter width");
var b=prompt("Enter height");

function rectangleArea(a, b) {
         return  a * b;
       
    }
    answer=rectangleArea(a,b);
     document.write("The area of rectangle is: " + answer);
   */ 


/*
//task10//
*/

/*
//task11//
*/

/*
//task12//
*/

/*
//task13//
*/


//task14//
