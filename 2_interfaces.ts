interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '12333',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12555',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = '#000';
// rect2.id = '2131' => error

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ============================

interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: '12354363',
    size: {
        width: 30,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height;      
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// ===================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}


