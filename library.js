// default objects for testing

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
const bookShelf = document.querySelector("#actualShelf");
const bookForm = document.querySelector("#bookForm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("readBook");
const addButton = document.getElementById("addToLibrary");
const newBook = document.getElementById("newBook");

addButton.addEventListener("click", addBookToLibrary);
newBook.addEventListener("click", centerForm);

function centerForm() {
  document.getElementById("bookForm").className = "centerForm";
}

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
  let newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  addCardToShelf();
  document.getElementById("bookForm").className = "hideForm";
  // clear fields on submit
  title.value = "";
  author.value = "";
  pages.value = "";
  readBook.checked = false;
}

function randomHsl() {
  return "hsla(" + Math.random() * 360 + ", 60%, 90%, 1)";
}

function createCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.style.backgroundColor = randomHsl()
  bookShelf.appendChild(bookCard);
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = book.title;
  title.textContent = book.title;
  console.log(Book.title);
  bookCard.appendChild(title);
  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = book.author;
  console.log(Book.title);
  bookCard.appendChild(author);
  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = book.pages + " " + "pages";
  console.log(Book.title);
  bookCard.appendChild(pages);
  const read = document.createElement("div");
  read.classList.add("read");
  if (book.read) {
    read.textContent = "Read";
    bookCard.appendChild(read);
  } else if (!book.read) {
    read.textContent = "Unread";
    bookCard.appendChild(read);
  } else read.textContent = book.read;
  bookCard.appendChild(read);
}

function addCardToShelf() {
  createCard(myLibrary[myLibrary.length - 1]);
  console.log(myLibrary[myLibrary.length - 1]);
}

myLibrary.push(everydayThings, asILayDying);

// addBookToLibrary();
addCardToShelf();
