const everydayThings = new Book(
  "The Design of Everyday Things",
  "Don Norman",
  "368",
  true
);

const asILayDying = new Book(
  "As I Lay Dying",
  "William Faulkner",
  "267",
  false
);

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}.`;
  };
}

function addBookToLibrary() {
  let newBook = new Book(
    prompt("Book Title"),
    prompt("Book Author"),
    prompt("Book Pages"),
    prompt("Read?")
  );
  myLibrary.push(newBook);
}

myLibrary.push(everydayThings, asILayDying);
// addBookToLibrary()

const bookShelf = document.querySelector("#shelf");

function createCard(Book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.setAttribute("id", Book.title);
  bookShelf.appendChild(bookCard);
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("cardTitle")
  cardTitle.textContent = Book.title; 
}

function addCardToShelf() {
  
}