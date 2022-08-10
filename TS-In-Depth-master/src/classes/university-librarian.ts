import * as Interfaces from '../interfaces';

// Interfaces for Class Types
export class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        return console.log(`${this.name} is assisting ${custName}`);
    }
}
