/** 
 * 基本用法
 * 
 */

// let命令声明变量，只是在let命令所在的代码块内有效
{
    let a = 10;
    var b = 1;
}
// a; //a is not defined
// b; //1

// for循环的计数器，就很适合使用let命令
for (let i = 1; i < 10; i++) {
    i += 1;
}
//console.log(i);//i is not defined