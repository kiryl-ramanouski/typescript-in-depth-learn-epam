/* eslint-disable no-redeclare */
showHello('greeting', 'TS');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Make my day ${name}`;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

// type Book = {
//     id: number;
//     title: string;
//     category: Category;
//     author: string;
//     available: boolean;
// };

interface DamageLogger {
    (p: string): void;
}
const logDamage: DamageLogger = reason => console.log(`Damaged: ${reason}`);

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

const getAllBooks = (): readonly Book[] => {
    const allBooks = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        {
            id: 3,
            title: 'CSS Top Secrets',
            category: Category.CSS,
            author: 'Lea Verou',
            available: true,
        },
        {
            id: 4,
            title: 'Mastering JavaScript',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return allBooks;
};

const logFirstAvailable = (books: ReadonlyArray<Book> = getAllBooks()): void => {
    const booksQuantity: number = books.length;
    const firstAvailableBookTitle: string = books.find(book => book.available)?.title;
    console.log(`Books quantity is ${booksQuantity}`);
    console.log(`First available book name is ${firstAvailableBookTitle}`);
};

const getBookTitlesByCategory = (category: Category = Category.JavaScript): Array<string> => {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
};

const logBookTitles = (titles: string[]): void => {
    titles.forEach(title => console.log(title));
};
const titles = getBookTitlesByCategory(Category.JavaScript);

const getBookAuthorByIndex = (index: number): [string, string] => {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
};

const calcTotalPages = (): bigint => {
    const libraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    return libraries.reduce((acc, lib) => acc + BigInt(lib.books) * BigInt(lib.avgPagesPerBook), 0n);
};

const createCustomerID = (name: string, id: number): string => {
    return `${id}-${name}`;
};
let myId: string = createCustomerID('Ann', 10);
let idGenerator: (name: string, id: number) => string = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
myId = idGenerator('Boris', 2);

const createCustomer = (name: string, age?: number, city?: string): void => {
    console.log(`Customer Name: ${name}`);
    if (age) {
        console.log(`Customer age: ${name}`);
    }
    if (city) {
        console.log(`Customer city: ${name}`);
    }
};

const getBookByID = (id: Book['id']): Book | undefined => {
    const books = getAllBooks();
    return books.find(book => book.id === id);
};

const checkoutBooks = (customer: string, ...bookIds: number[]): string[] => {
    console.log(`Customer Name: ${customer}`);
    return bookIds
        .map(id => getBookByID(id))
        .filter(book => book?.available)
        .map(book => book.title);
};

// Overloaded functions must have function declaration type
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];

function getTitles(...args: (string | boolean | number)[]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }
        if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        return books.filter(book => book.id === id && book.available === available).map(book => book.title);
    }
}

// Assert functions must have function declaration type.
function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

const bookTitleTransform = (title: any): string => {
    assertStringValue(title);
    return [...title].reverse().join('');
};

const printBook = (book: Book): void => {
    console.log(`${book.title} by ${book.author}`);
};

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: reason => console.log(`Damaged: ${reason}`),
};
printBook(myBook);
myBook.markDamaged('missing back cover');
