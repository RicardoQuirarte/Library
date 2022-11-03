let myLibrary = [];

function Book(title, author, genre, rating, pages, read) {
    this.title = title
    this.author = author
    this.genre = genre
    this.rating = rating
    this.pages = pages
    this.read = read
}

function getBookFromInput() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const genre = document.querySelector('#genre').value;
  const rating = document.querySelector('#rating').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;
  console.log(e.read);
  return new Book(title, author, genre, rating, pages, read);
}

function addBookToLibrary(e) {
  const userBook = getBookFromInput();
  myLibrary.push(userBook);
  console.log(myLibrary)
  e.preventDefault();
}

const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', addBookToLibrary);




function displayBooks () {
  for (books in myLibrary) {
    
  }
}

const theWayOfKings = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', 5, 1007, true)
const dracula = new Book('Dracula', 'Bram Stoker', 'Terror', 4, 496, false)

myLibrary.push(theWayOfKings, dracula);