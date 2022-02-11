/*********************************************************************
JavaScript 类型转换
1. 数字转换成字符串
2. 布尔值转换成字符串
3  字符串转换成数字
4. 布尔值转换为数字
5. 一元运算符+将字符串转换为数字
6. 自动转换
**********************************************************************/
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof null);
// console.log(typeof function() {});
// console.log(typeof myCar);


//---------数字转换成字符串---------------//
// var number = 123;
// var str = String(number);
// var concatRes = number + str;
// console.log(str);
// if(typeof str == "string") {
// 	console.log(str + " is string");
// }
// if(typeof number == "number") {
// 	console.log(number + " is number");
// }
// if(typeof concatRes == "string") {
// 	console.log(concatRes + " is string");
// }

//---------数字转换成字符串（2进制、10进制、16进制等）---------------//
// var num = 123;
// // var x = num.toString();
// // var x = num.toString(2);
// var x = num.toString(16);
// console.log(x);

//---------数字转换成字符串，指定小数点后位数或格式化为指定的长度---------------//
// var num = 12678;
// // var x1 = num.toFixed(2);  //x1是字符串
// var x2 = num.toPrecision(3); //x2是字符串
// console.log(x2);
// if(typeof x2 == "string") {
// 	console.log("is string");
// }

//---------布尔值转换为字符串---------------//
// var x = String(true);
// if(typeof x == "string") {
// 	console.log("is string");
// }

//---------字符串转换为数字---------------//
// var num = Number("3.14");  //返回3.14
// var x = Number("hello");   //返回NaN


//---------布尔值转换为数字---------------//
// var x = true;
// var num = Number(x);
// console.log(num);


//-----------parseInt()将字符串转换为数字----------//
// // var num = parseInt("345");
// var num = parseInt("0xf", 16);
// if(typeof num == "number") {
// 	console.log(num + " is number");
// }

//-----------parseFloat()将字符串转换为数字----------//
// var num = parseFloat("10.33");

//-----------一元运算符+----------//
// var x = "234";
// var y = + x;  //y是一个数字
// if(typeof y == "number") {
// 	console.log("y is number " + y);
// }

// var x = "hello";
// var y = + x;  //y是NaN
// if(typeof y == "number") {
// 	console.log("y is number " + y);
// }

//-------------自动转换类型-------------------//
// 5 + null    // 返回 5         null 转换为 0
// "5" + null  // 返回"5null"   null 转换为 "null"
// "5" + 1     // 返回 "51"      1 转换为 "1" 
// "5" - 1     // 返回 4         "5" 转换为 5

//---------自动转换为字符串  当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法----//
// document.getElementById("demo").innerHTML = myVar;

// myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
// myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
// myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"
// myVar = 123             // toString 转换为 "123"
// myVar = true            // toString 转换为 "true"
// myVar = false           // toString 转换为 "false"