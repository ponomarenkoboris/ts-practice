// const ness: string = 'hi';
// class Person {
//     constructor(private name: string) {}
// }
// const max = new Person('Maxim');


// const btn = document.querySelector('#BTN')!;

// btn.addEventListener('click', () => {
//     console.log('btn click');
// });

let anyFlag;

function loInfo(data: string, _?:number) {
    console.log(data);
    anyFlag = true
    console.log(anyFlag);
}

loInfo('I am data');

function mult(a:number, b:number) {
    if (a && b) {
        return a * b
    }
    return 0
}
