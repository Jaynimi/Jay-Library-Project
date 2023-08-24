let myLibrary = [
	{
		title: "The Mountaun Is You",
		author: "Dunno",
		pages: 100,
		// read: false,
	},
];

const $bookSection = document.getElementById("bookSection");
const $title = document.getElementById("title");
const $author = document.getElementById("author");
const $pages = document.getElementById("pages");
// const $read = document.getElementById("read");

// the constructor...
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	// this.read = read;
}

// display myLibrary
function displaymyLib() {}

function addBookToLibrary() {
	let title = $title.value;
	let author = $author.value;
	let pages = $pages.value;
	// let read = $read.value;

	if (title.length === 0 || author.length === 0 || pages.length === 0) {
		alert("Fill all the fields");
		return;
	}

	let newBook = new Book(title, author, pages);
	myLibrary.push(newBook);
}

function displayLibrary(books) {
	// library content
	let library = books.map(function (book) {
		return `<div>
		Title: ${myLibrary[i].title} , Author: ${myLibrary[i].author} , Number of Pages: ${myLibrary[i].pages} , Pages read: ${myLibrary[i].read}
		</div>`;
	});
	library = library.join("");
	$bookSection.innerHTML = library;

	// for (let i = 0; i < myLibrarylength; i++) {
	// 	preventDefault();
	// 	const books = `<div>
	// 		Title: ${myLibrary[i].title} , Author: ${myLibrary[i].author} , Number of Pages: ${myLibrary[i].pages} , Pages read: ${myLibrary[i].read}
	// 	</div>`;

	// 	document.getElementById("books").innerHTML = books;
	// }
}
