let myLibrary = [];
const bookShelf = document.querySelector('#actualShelf');
const bookForm = document.querySelector('#bookForm');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('readBook');
const addButton = document.getElementById('addToLibrary');
const newBook = document.getElementById('newBook');
const titleError = document.getElementById('title-error');
const authorError = document.getElementById('author-error');
const pagesError = document.getElementById('pages-error');

addButton.addEventListener('click', addBookToLibrary);
newBook.addEventListener('click', centerForm);

bookShelf.addEventListener('click', (e) => {
  //To delete from array and DOM

  if (e.target.classList.contains('deleteButton')) {
    let bookToDelete = e.target.value;
    const cardIDToDelete = e.target.id;
    let indexToDelete = myLibrary.findIndex((Book) => {
      return Book.title === bookToDelete;
    });
    const cardForDeletion = document.getElementById(`${bookToDelete}1`);

    cardForDeletion.remove();

    myLibrary.splice([indexToDelete], 1);
  }
});

bookShelf.addEventListener('change', (e) => {
  if (e.target.classList.contains('read')) {
    let bookToChange = e.target.value;
    let indexToChange = myLibrary.findIndex((Book) => {
      return Book.title === bookToChange;
    });
    if (myLibrary[indexToChange].read === true) {
      myLibrary[indexToChange].read = false;
    }
    if (myLibrary[indexToChange].read === false) {
      myLibrary[indexToChange].read = true;
    }
  }
});

function centerForm() {
  document.getElementById('bookForm').className = 'centerForm';
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
  document.getElementById('bookForm').className = 'hideForm';
  title.value = ''; // clear fields on submit
  author.value = '';
  pages.value = '';
  readBook.checked = false;
}

function randomHsl() {
  return 'hsla(' + Math.random() * 360 + ', 70%, 90%, 1)';
}

function createCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  bookCard.setAttribute('id', `${book.title}1`);
  bookCard.style.backgroundColor = randomHsl();
  bookShelf.appendChild(bookCard);
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = book.title;
  bookCard.appendChild(title);
  const author = document.createElement('div');
  author.classList.add('author');
  author.textContent = book.author;
  bookCard.appendChild(author);
  const pages = document.createElement('div');
  pages.classList.add('pages');
  if (book.pages !== '') pages.textContent = book.pages + ' ' + 'pages';
  bookCard.appendChild(pages);
  const readBox = document.createElement('div');
  readBox.classList.add('readBox');
  readBox.textContent = 'read';
  bookCard.appendChild(readBox);
  const read = document.createElement('input');
  read.setAttribute('type', 'checkbox');
  read.setAttribute('value', `${book.title}`);
  read.classList.add('read');
  if (book.read === true) {
    read.setAttribute('checked', 'checked');
  } else if (book.read === false) {
    read.removeAttribute('checked');
  }
  readBox.appendChild(read);

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'deleteButton');
  deleteButton.classList.add('deleteButton');
  deleteButton.setAttribute('value', `${book.title}`);
  deleteButton.textContent = 'delete';
  bookCard.appendChild(deleteButton);
}

function addCardToShelf() {
  createCard(myLibrary[myLibrary.length - 1]);
}
