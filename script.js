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

function addBookToLibrary(e) {
  const userBook = getBookFromInput();
  myLibrary.push(userBook);
  console.log(myLibrary)
  e.preventDefault();
}

const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', addBookToLibrary);



const newBookButton = document.querySelector('#newBook');
newBookButton.addEventListener('click', displayBooks);
const container = document.querySelector('#container');

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

  // myLibrary.forEach((element) => {

  //   let title = element.title;
  //   let author = element.author;
  //   let genre = element.genre;
  //   let pages = element.pages;
  //   const div = document.createElement('div');
  //   container.textContent = `${title}: ${title}`;
  //   container.appendChild(div);
  //   div.textContent = `${author}`
  //   const divTwo = document.createElement('div');
  //   divTwo.textContent = `${genre}`
  //   container.appendChild(divTwo);
  //   const divThree = document.createElement('div');
  //   divThree.textContent = `${pages}`
  //   container.appendChild(divThree);
  //   console.log(`${title}`);
  // });

  // for (let i = 0; i < myLibrary.length; i++) {
  //   container.textContent = `${myLibrary.title}`;
  //   const div = document.createElement('div');
  //   container.appendChild(div);
  //   div.textContent = `${myLibrary.author}`
  //   const divTwo = document.createElement('div');
  //   divTwo.textContent = `${myLibrary.genre}`
  //   container.appendChild(divTwo);
  //   const divThree = document.createElement('div');
  //   divThree.textContent = `${myLibrary.pages}`
  //   container.appendChild(divThree);
  //   const divFour = document.createElement('div');
  //   divFour.textContent = `${myLibrary.read}`
  //   container.appendChild(divFour);
  //   console.log(`${myLibrary.title}`);
  // }

  // for (let i = 0; i < myLibrary.length; i++) {
  //   const bookCard = document.createElement('div');
  //   bookCard.classList.add('bookCard')
  //   container.appendChild(bookCard);
  //   const jsonClean = JSON.stringify(myLibrary[i], null, 1);
  //   const unquoted = jsonClean.replace(/["{}]/g, ' ');
  //   bookCard.textContent = unquoted;
  //   console.table(myLibrary[i]);
  //   }
 


}
addEventListener('load', displayBooks);






function displayBookss () {
  for (books in myLibrary) {
      console.log(books)
    }
}


const theWayOfKings = new Book('The way of kings', 'Brandon Sanderson', 'Epic fantasy', '5', 1007, true)
const dracula = new Book('Dracula', 'Bram Stoker', 'Terror', '4', 496, false)

myLibrary.push(theWayOfKings, dracula);



//    container.appendChild(bookCard);
//    const jsonClean = JSON.stringify(myLibrary[i], null, 1);
//    const unquoted = jsonClean.replace(/["{}]/g, ' ');
//    bookCard.textContent = unquoted;