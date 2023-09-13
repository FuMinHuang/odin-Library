const myLibrary = [];

// Class: Create Books
class Book {
  constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
      return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`)
    }
  }
}

// addBookToLibrary Function
function addBookToLibrary([title, author, pages, read]) {
  let book = new Book(title, author, pages, read)
  myLibrary.push(book);
}

// toggleReadStatus Function
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBook();
}


// deleteBook Function
function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

// DisplayBook Function
function displayBook() {
  const content = document.querySelector(".content");
  content.textContent = "";
  const propertiesToDisplay = ["title", "author", "pages", "read"];

  for (let i = 0; i < myLibrary.length; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.id = i;
    content.appendChild(rowDiv);

    // Add new book value div
    propertiesToDisplay.forEach((property) => {
      const book = myLibrary[i];
      const newBookDiv = document.createElement("div");
      const newBookValue = document.createTextNode(book[property]);
      rowDiv.appendChild(newBookDiv);
      newBookDiv.appendChild(newBookValue);
      });
    
    const changeReadStatusBtn = document.createElement("button");
    changeReadStatusBtn.className = "changereadstatus";
    const changeReadStatusBtnText = document.createTextNode("Change Read Status");
    changeReadStatusBtn.appendChild(changeReadStatusBtnText);
    rowDiv.appendChild(changeReadStatusBtn);

    changeReadStatusBtn.addEventListener("click", () => {
      toggleReadStatus(i);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    const deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    rowDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      deleteBook(i);
    })
  };
};


// Dialog
const addaBookButton = document.getElementById("addaBook");
const dialog = document.getElementById("bookDialog");
const cancelButton = document.getElementById("cancel")
const submitButton = document.getElementById("submit")
const form = document.getElementById("form");

addaBookButton.addEventListener("click", () => {
  dialog.show();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {;
  e.preventDefault();
  const data = new FormData(form);
  const newArray = [];
  for (const value of data) {  
    newArray.push(value.slice(1).toString());
    }
    addBookToLibrary(newArray);    
    displayBook()
  dialog.close();
})


