// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
name=name.toUpperCase()
document.write(name)
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
var arr=new Array();
arr=sentence.split(" ");
for (var i = 0; i < arr.length; i++) {
    var string=arr[i];
    string=string.replace(string[0],string[0].toUpperCase());
    arr[i]=string;
}
str=arr.join(" ");
document.write(str)

//TODO write your code here...


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
money = money.substring( money.indexOf("￥")+1,money.length);
document.write(money)