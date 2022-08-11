import { ReferenceItem, RefBook, UniversityLibrarian } from './classes';
import { getAllBooks } from './functions';

showHello('greeting', 'TS');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Make my day ${name}`;
}

// Task 06.05
const flag = true;
if (flag) {
    import('./classes').then(module => {
        const reader = new module.Reader();
        reader.name = 'Anna';
        reader.take(getAllBooks()[0]);
        console.log(reader);
    });
}
