/*********************************************************************
JavaScript String 对象
1. 属性：length
2. 方法：
	indexOf()、lastIndexOf()、match()、search()、startsWith()、endsWith()、includes()
	charAt()、charCodeAt()、fromCharCode()
	concat()、replace()
	slice()、split()、substr()、substring()
	toLowerCase()、toUpperCase()、trim()、toString()
	
**********************************************************************/
// var str="Hello world, welcome to the universe.";
// var n=str.indexOf("world");
// console.log(n);

// var str="Hello world, welcome to the universe.";
// var n=str.lastIndexOf("el");
// console.log(n);

// var str="The rain in SPAIN stays mainly in the plain"; 
// var n=str.match(/ain/g);  //结果是个数组
// console.log(n);
// if(n == null) {
// 	console.log("not matched");
// } else {
// 	console.log("matched");
// }

// var str="Visit Runoob!"; 
// // var n=str.search("Runoob");
// var n=str.search(/Runoob/g);
// console.log(n);

// var str = "Hello world, welcome to the Runoob.";
// var n = str.startsWith("Hello");
// console.log(n);

// var str = "Hello world, welcome to the Runoob.";
// var n = str.endsWith("Runoob.");
// console.log(n);

// var str = "Hello world, welcome to the Runoob。";
// var n = str.includes("world");
// console.log(n);


// var str = "HELLO WORLD";
// var n = str.charAt(2);
// console.log(n);

// var str = "HELLO WORLD";
// var n = str.charCodeAt(0);
// console.log(n);

// var n = String.fromCharCode(65);
// console.log(n);

// var str1 = "Hello ";
// var str2 = "world!";
// var n = str1.concat(str2);
// console.log(n);

// var str="Visit Microsoft! Visit Microsoft!";
// var n=str.replace("Microsoft","Runoob");
// console.log(n);

// var str="Hello world!";
// var n=str.slice(1,5);
// console.log(n);

// var str="Hello world!";
// var n=str.slice(1,5);
// console.log(n);

// var str="How are you doing today?";
// var n=str.split(" ");
// // var n=str.split("");
// // var n=str.split();
// console.log(n);

// var str="Hello world!";
// var n=str.substr(2,3);
// console.log(n);

// var str="Hello world!";
// var n=str.substring(1,4);
// console.log(n);

// var str="Runoob";
// // var n = str.toLowerCase();
// var n = str.toUpperCase();
// console.log(n);

// var str = "       Runoob        ";
// console.log(str.trim());

// var str= "hello";
// if(typeof str == "string") {
// 	console.log("is string");
// } else {
// 	console.log("not string");
// }