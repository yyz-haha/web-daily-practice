/*********************************************************************
JavaScript Array 对象
1. 属性：length
2. 方法：
	foreach()、concat()、filter()、find()、indexOf()、lastIndexOf()、includes()、join()、map()
	pop()、shift()、push()、slice()、toString()
	sort()、reverse()
**********************************************************************/
// var numbers = [3, 10, 2, 20];
// var sum = 0;

// function myFunction(item, index) {
// 	sum += item;
// 	document.getElementById('demo').innerHTML = sum;
// }


// var arr1 = ["orange", "apple", "cake"];
// var arr2 = ["milk", "meat"];
// var res = arr1.concat(arr2);
// console.log(res);

// var arr1 = ["orange", "apple", "cake"];
// var arr2 = ["milk", "meat"];
// var arr3 = ["banana", "water"];
// var res = arr1.concat(arr2, arr3);
// console.log(res);

// var arr1 = ["orange", "apple", "cake"];
// var res = arr1.concat("milk", "meat", "water");
// console.log(res);


//传递两个参数m，n，返回长度为m，所有元素都为n的数组，要求不能用循环。
// function fn(m, n) {
// 	return m ? fn(m-1, n).concat(n) : [];
// }
// console.log(fn(3, 4));


// //打印数组 ages 中所有元素都大于 18 的元素
// var ages = [10, 23, 49, 7];
// function checkAdult(age, index) {
// 	return index >=2 && age >= 18;
// }
// var newAges = ages.filter(checkAdult);
// console.log(ages);
// console.log(newAges);


// var ages = [10, 23, 49, 7];
// function checkAdult(age) {
// 	return age >= 18;
// }
// var myage = ages.find(checkAdult);
// console.log(ages);
// console.log(myage);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");
// if(a > -1) {
// 	console.log("find");
// } else {
// 	console.log("not find");
// }

// var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
// var a = fruits.indexOf("Apple", 3);
// console.log(a);
// if(a > -1) {
// 	console.log("find");
// } else {
// 	console.log("not find");
// }


// var fruits = ["Banana", "Apple", "Orange", "Apple", "Mango"];
// var a = fruits.lastIndexOf("Apple");
// console.log(a);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var n = fruits.includes("Mango"); //返回true或false

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var res = fruits.join();
// // var res = fruits.join("");
// // var res = fruits.join("*");
// console.log(res);

// var numbers = [1, 2, 3, 4];
// function fn(item) {
// 	return item*item;
// }
// var new_numbers = numbers.map(fn);
// console.log(numbers);
// console.log(new_numbers);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Tomato");
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Tomato");
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);  //左开右闭
// console.log(citrus);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var str = fruits.toString();
// console.log(str);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort().reverse();
// console.log(fruits);
