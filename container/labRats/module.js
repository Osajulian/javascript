import { Teacher } from './teacher.js';
// I noticed this only works in the browser console if you include the file extension - 'js'. Although this is not required in import statements.
const teacher = new Teacher('Osa', 'Bsc');
teacher.teach();