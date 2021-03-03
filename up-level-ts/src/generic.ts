// const cars:string[] = ['Ford', 'Audy'];
// const cars2: Array<string> = ['Ford', 'Audy'];

// const prom = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('promise resolve');
//     }, 500);
// });

// prom.then(data => {
//     console.log(data.trim().toUpperCase());
// });

function mergeObjects<T extends object, R extends object>(a:T, b:R) {
    return Object.assign({}, a, b)
};

const merged = mergeObjects({name: 'Boris'}, {age: 21});
const merge2 = mergeObjects({model: 'Ford'}, {year: 10});

// const merge3 = mergeObjects({a: 'aaa'}, 'bbb');
// console.log('merge3: ', merge3);
interface ILenght{
    length: number
}
function withCount<T extends ILenght>(value:T): {value:T, count:string} {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    }
}

// console.log(withCount('cjcjcj'));
// console.log(withCount(['a', 'dkosjf', '948750']));
// console.log(withCount(34));
// console.log(withCount({length: 20}));

// function getObjectValue<T extends object, R extends keyof T>(obj:T, key:R) {
//     return obj[key]
// }
// const person = {
//     name: 'Boris',
//     age: 21,
//     job: 'none'
// }
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

class Collection<T extends number | string | boolean> {
    // private _items: T[] = []

    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection(['I', 'am', 'robot']);
// strings.add('1');
// strings.remove('am');
// console.log(strings.items);

// const numbers = new Collection([1, 2, 3])
// numbers.add(4);
// numbers.remove(3)
// console.log(numbers.items);

// const objects = new Collection([{a: 1}, {n: 2}]);
// objects.remove({b: 2})
// console.log(objects.items);

interface Car {
    model: string,
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {};

    if(model.length > 3) car.model = model;
    if (year > 2000) car.year = year;

    return car as Car
}

/// 

const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift();
const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}
// ford.model = 'Ferrary'