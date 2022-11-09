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

const containerCards = document.querySelector('#containerCards');
const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', addBookToLibrary);

const required = [...document.querySelectorAll('.required')];
required.forEach(input => input.oninput = e =>
  submitBook.disabled = !required.every(input => input.value.length > 0));
  
function addBookToLibrary(e) {
  const userBook = getBookFromInput();
  myLibrary.push(userBook);
  showBooks();
  displayBooks();
}

function showBooks () {
  container.classList.remove('blur');
  popUpForm.classList.remove('openPopUp')
  container.classList.add('moveContainer');
  containerCards.classList.add('changePosition');
}

const checkbox = document.querySelector('.read');

function displayBooks () {
  for (const books of myLibrary.slice(-1)) {
    const divFather = document.createElement('div');
    divFather.classList.add('bookCard');
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
  }
}


  // divFour.addEventListener('click', toggleRead);

  // Book.prototype.toggleRead = function() {
  //   if (divFour.checkbox == true) {
  //     divFather.classList.add('bookRead')
  //   }
  // }


  
const newBookButton = document.querySelector('.newBookButton');
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

const theWayOfKings = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
myLibrary.push(theWayOfKings);
console.log(theWayOfKings.read)


Book.prototype.toggleRead = function(user) {
let filtered = myLibrary.filter(item => item.user === user);
filtered.map(item => item.read = false);
}



// Book.prototype.toggleRead = function() {
//   myLibrary.forEach((element) => {
//     if (Book.read == true) {
//       Book.read = !Book.read
//    }
//   }) 
// }