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
  return new Book(title, author, genre, rating, pages, read);
}

const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
  const userBook = getBookFromInput();
  myLibrary.push(userBook);
  console.log(myLibrary)
  e.preventDefault();
}



const newBookButton = document.querySelector('#newBookButton');
const popUpForm = document.querySelector('.popUpForm');
const container = document.querySelector('#container');

newBookButton.addEventListener('click', openPopUp);
window.addEventListener('mouseup', closePopUp)

function openPopUp () {
  container.classList.add('blur');
  popUpForm.classList.add('openPopUp');
}

function closePopUp (e) {
  if (e.target != popUpForm && e.target.parentNode != popUpForm) {
    container.classList.remove('blur');
    popUpForm.classList.remove('openPopUp')
  }
}



function displayBooks () {
  for (const books of myLibrary) {
    const divFather = document.createElement('div');
    divFather.classList.add('bookCard');

    const divOne = document.createElement('div');
    divOne.textContent = `${books.title}`
    divFather.appendChild(divOne);
    const div = document.createElement('div');
    div.textContent = `${books.author}`
    divFather.appendChild(div);
    const divTwo = document.createElement('div');
    divTwo.textContent = `${books.genre}`
    divFather.appendChild(divTwo);
    const divThree = document.createElement('div');
    divThree.textContent = `${books.pages}`
    divFather.appendChild(divThree);
    const divFour = document.createElement('div');
    divFour.textContent = `${books.read}`
    divFather.appendChild(divFour);

    container.appendChild(divFather);
    console.log(`${books.title}`);
  }

}

addEventListener('load', displayBooks);






// const theWayOfKings = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
// const dracula = new Book('Dracula', 'Bram Stoker', 'Terror', '4', 496, false)

// myLibrary.push(theWayOfKings, dracula);




//    container.appendChild(bookCard);
//    const jsonClean = JSON.stringify(myLibrary[i], null, 1);
//    const unquoted = jsonClean.replace(/["{}]/g, ' ');
//    bookCard.textContent = unquoted;