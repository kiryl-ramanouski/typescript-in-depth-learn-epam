import { ReferenceItem } from './classes';

showHello('greeting', 'TS');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Make my day ${name}`;
}

class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }
    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
