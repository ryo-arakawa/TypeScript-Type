var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = 'hello';
var back = "hello";
// vscodeも全てtypescriptで書かれている
// 基本的には型推論でかく
// 型推論ができない時のみ型注釈でかく
var hasValue = true;
var hello; //any なんでもok
// オブジェクトに型をつける
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// console.log(person.gender);  //ないものはちゃんと弾かれる
// 配列
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
//tapple
var book = ['business', 1500, false];
book.push(21);
