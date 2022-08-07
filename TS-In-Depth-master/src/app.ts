showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =================================================
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
};

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

// =================================================
const logFirstAvailable = (books: Book[]): void => {
    const booksQuantity: number = books.length;
    const firstAvailableBookTitle: string = books.find(book => book.available)?.title;
    console.log(`Books quantity is ${booksQuantity}`);
    console.log(`First available book name is ${firstAvailableBookTitle}`);
};

// =================================================
const getBookTitlesByCategory = (category: Category): Array<string> => {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
};

// =================================================
const logBookTitles = (titles: string[]): void => {
    titles.forEach(title => console.log(title));
};
const titles = getBookTitlesByCategory(Category.JavaScript);

// =================================================
const getBookAuthorByIndex = (index: number): [string, string] => {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
};

// =================================================
const calcTotalPages = (): bigint => {
    const libraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    return libraries.reduce((acc, lib) => acc + BigInt(lib.books) * BigInt(lib.avgPagesPerBook), 0n);
};
