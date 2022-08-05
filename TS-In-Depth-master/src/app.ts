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

const getAllBooks = (): Book[] => {
    const allBooks = [
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
    const books: Book[] = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
};
console.log(getBookTitlesByCategory(Category.JavaScript));
