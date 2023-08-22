const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`)
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read)
  myLibrary.push(book);
}

addBookToLibrary("Book1", "J.R.R. Tolkien", 1295, "Read");
addBookToLibrary("Book2", "DH", 2295, "Not Read");
addBookToLibrary("Book3", "BB", 2395, "Read");
addBookToLibrary("Book4", "AA", 2945, "Not Read");


const titleColumn = document.querySelector(".title");
const authorColumn = document.querySelector(".author");
const pagesColumn = document.querySelector(".pages");
const readColumn = document.querySelector(".read");

function displayBook() {
  myLibrary.forEach((book) => {
    const newTitleDiv = document.createElement("div");
    const newTitleContent = document.createTextNode(book.title);
    newTitleDiv.appendChild(newTitleContent);
    titleColumn.appendChild(newTitleDiv);

    const newAuthorDiv = document.createElement("div");
    const newAuthorContent = document.createTextNode(book.author);
    newAuthorDiv.appendChild(newAuthorContent);
    authorColumn.appendChild(newAuthorDiv);

    const newPagesDiv = document.createElement("div");
    const newPagesContent = document.createTextNode(book.pages);
    newPagesDiv.appendChild(newPagesContent);
    pagesColumn.appendChild(newPagesDiv);

    const newReadDiv = document.createElement("div");
    const newReadContent = document.createTextNode(book.read);
    newReadDiv.appendChild(newReadContent);
    readColumn.appendChild(newReadDiv);
  });
}

displayBook();