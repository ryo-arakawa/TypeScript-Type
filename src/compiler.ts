let hi = 'hello';
console.log(hi.toLowerCase());
// 2つのファイルをcompile
// tsc compiler.ts index.ts

// コマンドひとつで全てコンパイル
// tsc --init

// これを打つことでtscだけでOKになる

let implicitAny
implicitAny = 'implicityAny';
implicitAny.toUpperCase

// 一般的な型は全てnullを含む

let onlyNull: null = null;
let onlyUndefined: undefined = undefined;