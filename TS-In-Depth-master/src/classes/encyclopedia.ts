import { ReferenceItem } from './reference-item';

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

export default Encyclopedia;
