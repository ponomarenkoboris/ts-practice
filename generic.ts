const arrayOfNumb: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStr: Array<string> = ['hellow', 'world'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumb);
reverse(arrayOfStr);