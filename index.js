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
// 初期値は厳しいが、その後は緩い
// const CoffeeSize = {
//     SHORT: 'SHORT',
//     TALL: 'TALL',
//     GRANDE: 'GRANDE',
//     VENTI: 'VENTIE'
// }
// この時sizeが四つの値しか取らないようにしたい
// 列挙型を利用する
// enum CoffeeSize  {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTIE'
// }
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
// javascritptは命名規則でキャメルケースを使う
// typescriptの場合には大文字から始まる(パスカルケースが一般)
// any型について
var anything = true;
anything = 'hello';
anything = {};
var banana = 'banana';
banana = anything;
// union型について
var unionType = 10;
var unionTypes = [21, 'hello'];
// リテラル型　決まった値しか代入できない
var apple = 'apple';
//typescriptはletを使うことでstring・constを使うことでリテラル型を採用する
// union型とリテラル型の合体
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
