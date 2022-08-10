import { ReferenceItem, RefBook, UniversityLibrarian } from './classes';

showHello('greeting', 'TS');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Make my day ${name}`;
}
