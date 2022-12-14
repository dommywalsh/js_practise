// addFavoriteBook("A Song of Ice and Fire");
// addFavoriteBook("The Great Gatsby");
// addFavoriteBook("Crime & Punishment");
// addFavoriteBook("Great Expectations");
// addFavoriteBook("You Don't Know JS");

class Bookshelf {
    constructor() {
      this.favoriteBooks = []
    }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  };

  printFavoriteBooks() {
    console.log(`favorite books: ${String(this.favoriteBooks.length)}`)
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  };
}

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames){
    for (let bookName of bookNames) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
  });
}

const BOOK_API = "https://some.url/api";

let myBooks = new Bookshelf();
loadBooks(myBooks)

// myBooks.favoriteBooks
// console.log(myBooks.favoriteBooks)

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
