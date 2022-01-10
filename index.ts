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
const apple: 'apple' = 'hello'

//typescriptはletを使うことでstring・constを使うことでリテラル型を採用する