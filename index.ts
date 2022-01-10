let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = 'hello';
let back: string = `hello`;

// vscodeも全てtypescriptで書かれている

// 基本的には型推論でかく
// 型推論ができない時のみ型注釈でかく


let hasValue = true;

let hello; //any なんでもok

// オブジェクトに型をつける

const person = {
    name:{
        first: 'Jack',
        last: 'Smith'
    },
        age: 21
}
// console.log(person.gender);  //ないものはちゃんと弾かれる

// 配列
const fruits = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];

//tapple
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21)

// 初期値は厳しいが、その後は緩い