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



enum CoffeeSize  {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.GRANDE;

// javascritptは命名規則でキャメルケースを使う
// typescriptの場合には大文字から始まる(パスカルケースが一般)


// any型について
let anything: any = true;
anything = 'hello';
anything = {};
let banana = 'banana';
banana = anything;

// union型について

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello']

// リテラル型　決まった値しか代入できない
const apple: 'apple' = 'apple'

//typescriptはletを使うことでstring・constを使うことでリテラル型を採用する



// union型とリテラル型の合体
// let clothSize: 'small' | 'medium' | 'large' = 'large'
type clothSize = 'small' | 'medium' | 'large'

let clothSize: clothSize = 'large';
const cloth:  {
    color: string;
    size: clothSize
} = {
    color: 'white',
    size: 'medium'
}

// 必ず関数には型をつける⇨anyになってしまうから
// パラメータの後ろに戻り値をつける
//戻り値の型もつけておいた方がいよい




function sayHello(): void {
    console.log('Hello!');
}

function sayGoodbye(): undefined {
    console.log('Hello!');
    return;
}

console.log(sayHello());
let tmp: undefined;

// returnの場合にはundefinedでも使える

// void→何も返さないという型

// undefined型はundefinedとnullを扱うことができる



// 関数宣言時の型と関数を保持する変数に型をつける場合の違いについて

function add(num1: number, num2: number): number {
    return num1 + num2
}

// :と=>の違い

const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2
};

const doubleNumber = (number: number): number => number * 2;


// const doubleNumber: number (num: number) => number = num => number * 2


// callback関数の型の書き方について
function doubleAndHandle(num: number, cb: (num: number) => number): void  {
    const doubleNum = cb(num *2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

// unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
anyInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}


// unknown型はなんでも入れられるが使う時は172行目のように補償が必要

// never型
function error( message: string) {
    throw new Error(message);
}
console.log(error('This is an error'));

// 何も返さない