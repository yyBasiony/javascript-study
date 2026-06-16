console.log("hello"); //hello
var x = 10;
console.log(x); //10
console.log("x"); //x
x = 20;
console.log(x); //20
var X = "yasmine";
console.log(X);
var firstNum = 10;
var secondNum = 4;
var sum = firstNum + secondNum;
var sub = firstNum + secondNum;
var mult = firstNum * secondNum;
var div = firstNum / secondNum;
var mod = firstNum % secondNum;
console.log("First number is" + firstNum);
console.log("Second number is" + secondNum);
console.log("Sum is" + sum);
console.log("Subtraction is" + sub);
console.log("Multiplication is" + mult);
console.log("Division is" + div);
console.log("Modulus is" + mod);
//string
//------------------------------------------
var y = "yasmine";
console.log(y);
var z = `my name is ${y}`;
console.log(z);
console.log(y.substring(0, 3));
console.log(y.length);
console.log(y.toUpperCase());
console.log(y.toLowerCase());
console.log(y.replace("i", "ee"));
var myChar = y.charAt(3);
console.log(myChar);
//task
var myStr = "hello world";
console.log(myStr.toUpperCase());
console.log(myStr.replace("o", "y"));
console.log(myStr.split("").reverse().join(" "));
//-------------------------------------------------
//numbers
var a = 10;
var b = 3;
var sum = a + b;
var sub = a - b;
console.log(sum);
console.log(sub);
Math.max(a, b);
//-----------------------
//Boolean
var x = 10;
var y = 20;
console.log(x > y);
console.log(typeof x);
//logical operators
var x = 10;
var y = 20;
var z = x < 3 || y < 10 || y != 10;
console.log(z);
//casting
var x = "10";
var y = "20";
//console.log(Number(x)+y);//error number+string
console.log(Number(x) + Number(y));
//conditions
var age = 18;
if (age > 18) {
  console.log("age is greater than 18");
} else if (age == 18) {
  console.log("age is equal to 18");
} else {
  console.log("age is less than 18");
}
