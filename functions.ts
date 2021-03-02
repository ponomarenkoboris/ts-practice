function add(a: number, b:number):number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

// перегрузка функций (вызов функции с разными параметрами и получение разных значений)
interface MyPosition {
    x: number | undefined,
    y: number | undefined
}
interface MyPositionWithDefault extends MyPosition {
    default: string
}
function position(): MyPosition ;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?:number) {
    if(!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}   
console.log('empty ', position());
console.log('one param ', position(33));
console.log('full ', position(45, 3));