class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typesctipt version is ${this.version}`;
    }
}

class Car {
    readonly model: String
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}
// =========================

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

// ===============

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on Render')
    }

    info(): string {
        return 'This is info';
    }
}

