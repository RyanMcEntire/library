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
const bookShelf = document.querySelector("#shelf");

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

function createCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookShelf.appendChild(bookCard);
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("cardTitle");
  cardTitle.textContent = book.title;
  console.log(Book.title);
  bookCard.appendChild(cardTitle);
  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("cardTitle");
  cardAuthor.textContent = book.author;
  console.log(Book.title);
  bookCard.appendChild(cardAuthor);
  const cardPages = document.createElement("div");
  cardPages.classList.add("cardTitle");
  cardPages.textContent = book.pages;
  console.log(Book.title);
  bookCard.appendChild(cardPages);
  const cardRead = document.createElement("div");
  cardRead.classList.add("cardTitle");
  if (book.read) {
    cardRead.textContent = "Read";
    bookCard.appendChild(cardRead);
  } else cardRead.textContent = "Unread";
  bookCard.appendChild(cardRead);
}

function addCardToShelf() {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
    console.log(myLibrary[i]);
  }
}

myLibrary.push(everydayThings, asILayDying);
addCardToShelf();
//addBookToLibrary();
