let myLibrary = [];

class Book {
  constructor (title, author, genre, rating, pages, read) {
    this.title = title
    this.author = author
    this.genre = genre
    this.rating = rating
    this.pages = pages
    this.read = read
} 
  toggleRead(user) {
  let filtered = myLibrary.filter(item => item.user === user);
  filtered.map(item => item.read = false);
  }
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

const containerCards = document.querySelector('#containerCards');
const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', addBookToLibrary);

const required = [...document.querySelectorAll('.required')];
required.forEach(input => input.oninput = e =>
  submitBook.disabled = !required.every(input => input.value.length > 0));


const popUpForm = document.querySelector('.popUpForm');
popUpForm.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    submitBook.click();
  }
});
  
function addBookToLibrary(e) {
  const userBook = getBookFromInput();
  myLibrary.push(userBook);
  showBooks();
  displayBooks();
  required.forEach(input => {
    input.value = '';
  });
  containerCards.classList.remove('blur');
}

function showBooks () {
  container.classList.remove('blur');
  popUpForm.classList.remove('openPopUp')
  container.classList.add('moveContainer');
  containerCards.classList.add('changePosition');
}

const checkbox = document.querySelector('.read');

counter = 0;

function displayBooks () {
  for (const books of myLibrary.slice(-1)) {
    const divFather = document.createElement('div');
    divFather.classList.add('bookCard');
    divFather.setAttribute('data-index', `${counter}`);
    const divClose = document.createElement('span');
    divClose.textContent = '✘';
    divClose.classList.add('divClose');
    divFather.appendChild(divClose);
    divClose.addEventListener('click', () => {
     delete myLibrary[divFather.dataset.index];
     divFather.remove();
    })
    const divOne = document.createElement('div');
    divOne.textContent = books.title;
    divFather.appendChild(divOne);
    const div = document.createElement('div');
    div.textContent = books.author;
    divFather.appendChild(div);
    const divTwo = document.createElement('div');
    divTwo.textContent = books.genre;
    divFather.appendChild(divTwo);
    const divThree = document.createElement('div');
    divThree.textContent = books.pages;
    divFather.appendChild(divThree);
    const divFour = document.createElement('input');
    divFour.setAttribute('type', 'checkbox');
    divFour.classList.add('read');
    if (checkbox.checked == true) {
      divFour.checked = true;
      divFather.classList.add('bookRead');
    } else {
      divFather.classList.add('bookNotRead');
    }
    divFour.addEventListener('click', () => {
      if (divFour.checked == true) {
      divFather.classList.add('bookRead');
      } else if (divFour.checked == false) {
        divFather.classList.remove('bookRead')
        divFather.classList.add('bookNotRead');
      }
    })
    divFather.appendChild(divFour);
    containerCards.appendChild(divFather);
    counter++
  }
}
  
const newBookButton = document.querySelector('.newBookButton');
const container = document.querySelector('#container');

newBookButton.addEventListener('click', openPopUp);
window.addEventListener('mouseup', closePopUp)

function openPopUp () {
  container.classList.add('blur');
  containerCards.classList.add('blur');
  popUpForm.classList.add('openPopUp');
  checkbox.checked = false;
}

function closePopUp (e) {
  if (e.target != popUpForm && e.target.parentNode != popUpForm) {
    container.classList.remove('blur');
    containerCards.classList.remove('blur');
    popUpForm.classList.remove('openPopUp');
  }
}

const theWayOfKings = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const dracula = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const elPadrino = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const nameOfTheWind = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const hello = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const world = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const tokioBlues = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
myLibrary.push(theWayOfKings, dracula, elPadrino, nameOfTheWind, hello, world, tokioBlues);