// constructor function which will creat Book objects
function Book(title, author, yearPublished) {  // returns a JS object
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
}

// instance objects
let book1 = new Book('Neuromancer', 'William Gibson', 1984);
let book2 = new Book('Doomsday Book', 'Connie Willis', 1992);

console.log(book1);
console.log(book2);