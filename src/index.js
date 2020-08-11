import Stack from './ds/stack';
import Queue from './ds/queue';

import "./styles.css";

const books = new Stack();
books.push('first');
books.pop();
// books.push('second');
// books.push('three');
// books.push('four');
// books.isEmpty();

//  QUEUE
const movieQ = new Queue();
movieQ.enqueue('Finding Nemo');
movieQ.enqueue('Zootopia');
// movieQ.enqueue('The life of pets');
// movieQ.isEmpty();
movieQ.dequeue();
movieQ.dequeue();

document.getElementById("app").innerHTML = `
<h1>Hello World!</h1>
<hr />
`;
