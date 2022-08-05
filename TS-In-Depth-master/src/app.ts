showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =================================================
type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
};

const getAllBooks = (): Book[] => {
    const allBooks = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript', author: 'Andrea Chiarelli', available: true },
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
logFirstAvailable(getAllBooks());
