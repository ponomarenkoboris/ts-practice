// interfaces - интерфейсы. В них указываются какие поля и какие типы должны присутствовать у наследников интерфейса
interface Rect {
    readonly id: string, // readonly - только для чтения
    color?: string, // ? - необязательный параментр
    size: {
        width: number,
        height: number
    }
}

const recat1: Rect = {
    id: 'reac1',
    size: {
        width: 50,
        height: 30
    },
    color: '#ccc'
}
const rect2: Rect = {
    size: {
        width: 90,
        height: 100
    },
    id: 'rect2'
}
rect2.color = '#fff';

// альтернативное приведение к объекту Rect
const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Наследовнаие интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}
const rect5: RectWithArea = {
    id: '1234',
    size: {
        width: 4,
        height: 5
    },
    getArea():number {
        return this.size.width * this.size.height
    }
}

// Взаимодействие интерфейсов и классов 
// имплиментирование 
interface IClock {
    time: Date,
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date):void {
        this.time = date
    }
}
// интерфейс для объекта с больщим коддичеством динамических ключей 
interface Styles {
    [key: string]: string
}
const css:Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

