import Category from './enums';
import { Book as BookInterface, Person } from './interfaces';

type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
};

export type BookProperties = keyof BookInterface;

// Intersection and union types
export type PersonBook = Person & BookInterface;

let pb: PersonBook = {
    id: 1,
    name: 'Ann',
    title: 'Js',
    author: 'Ann',
    available: false,
    category: Category.Angular,
    email: 'ann@gmail.com',
    markDamaged: null,
};

export type BookOrUndefined = Book | undefined;
