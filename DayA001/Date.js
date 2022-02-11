// // var date = new Date();
// // var date = new Date("October 13, 1975 11:13:00");
// // var date = new Date(79,5,24);
// var date = new Date(79,3,24,11,33,0);
// console.log(date);

//----设置日期(记住 JavaScript 月数是从0至11。10是11月。)--------//
// var myDate = new Date();
// myDate.setFullYear(2010, 0, 14);  //Thu Jan 14 2010 14:51:48 GMT+0800 (中国标准时间)
// console.log(myDate);

//----设置为5天后的日期---------//
// var myDate = new Date();
// myDate.setDate(myDate.getDate() + 5);
// console.log(myDate);


//----两个日期比较-------------//
// var x=new Date();
// x.setFullYear(2100,0,14);
// var today = new Date();

// if (x > today)
// {
//     console.log("今天是2100年1月14日之前");
// }
// else
// {
//     console.log("今天是2100年1月14日之后");
// }

//----获取年份---------------//
// var d = new Date();
// console.log("今年是" + d.getFullYear() + "年");

//-----获取1970年1月1日至今的毫秒数---------//
// var d = new Date();
// console.log(d.getTime());

//------toUTCString() 将当日的日期（根据 UTC）转换为字符串。-----//
// var d = new Date();
// console.log(d.toUTCString());

//--------getDay()获取当前星期X(0-6,0代表星期天)---------//
// var d = new Date();
// var weekday=new Array(7);
// weekday[0]="周日";
// weekday[1]="周一";
// weekday[2]="周二";
// weekday[3]="周三";
// weekday[4]="周四";
// weekday[5]="周五";
// weekday[6]="周六";
// console.log("今天是" + weekday[d.getDay()]);


//-----------toLocaleDateString---------//
var date = new Date();
console.log(date.toLocaleDateString()); //2022/2/11


//-------将Date对象转换成字符串-----------//
// var d = new Date();
// var x = d.toString();