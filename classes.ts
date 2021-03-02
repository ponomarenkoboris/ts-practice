class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        console.log(this.version + ` ${name}`);
    }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;

//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }
class Car {
    readonly numberOfWheels: number = 4;

    constructor(readonly model: string) {}
}
// модификаторы 
class Animal {
    protected voice: string = ''; // protected - доступны во всём классе и наследуются другим классам
    public color: string = 'black'; // public - доступны вообще для всех инстансов 
    private go(color: string): void { // private - такие переменные доступны только в том классе, в которым опеределенны
        console.log('go ', color);
    }
    constructor(color: string) {
        this.color = color;
        this.go(this.color)
    }
}
const an = new Animal('fff');

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

// абстрактные классы - нужны для того, чтобы отних наследоваться. Они не во что не компилируются.
abstract class Component {
    abstract render(): void
    abstract info(): string
}
class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }
    info(): string {
        return 'Component info';
    }
} 