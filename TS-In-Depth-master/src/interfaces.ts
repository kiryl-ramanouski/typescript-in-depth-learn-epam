import Category from './enums';

export interface DamageLogger {
    (p: string): void;
}

export interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

export interface Person {
    name: string;
    email: string;
}

export interface Author extends Person {
    numBooksPublished: number;
}

export interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}
