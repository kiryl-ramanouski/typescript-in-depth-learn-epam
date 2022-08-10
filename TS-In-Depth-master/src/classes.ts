/* eslint-disable no-underscore-dangle */

import * as Interfaces from './interfaces';

export abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;
    getID(): number {
        return this.#id;
    }

    private _publisher: string;
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department = 'JavaScript department';

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

// Interfaces for Class Types
export class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        return console.log(`${this.name} is assisting ${custName}`);
    }
}
