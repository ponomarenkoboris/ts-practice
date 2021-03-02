const str: string = 'Hellow world';
const num: number = 10;
const bool: boolean = true;
const arr: number[] = [1, 2, 3];
const arr2: string[] = ['hellow', 'world'];
const arr3: Array<string> = ['hellow', 'world']; // generic

// TUPLE types allow to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
let x: [number, string]; 
x = [1, 'hellow'];

// enum
enum Color {
    Red, 
    Green,
    Blue
}
let c: Color = Color.Red
// Any - allows you to override types
let varialbe: any = 42;
varialbe = 'string'

// ===
// void - означает, что функция ничего не возвращает
function sayMyName(name: string):void {
    console.log(name);
}
console.log(sayMyName('boris'));

// never 
const throwError = (mess:string):never => {
    throw new Error(mess)      
}
function infinite():never {
    while (true) {
        // this function never stop
    }
}

// Type - создание собственных типов 
type Login = string
const user:Login = 'hellow'

type ID = string | number // либо string, либо number
const stringId:ID = 'id';
const numberId:ID = 2;

// null undefined

type Sometype = string | null | undefined

