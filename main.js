let myLibrary = [];

const bookSection = document.getElementById("bookSection");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const form = document.getElementById("form");

function Book(title, author, pages, read) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	// do stuff here
	if (title.length === 0 || author.length === 0 || pages.length === 0) {
		alert("Fill all the fields");
		return;
	}
	const newBook = new Book(title, author, pages, read);
	// newBook.display();
	myLibrary.push(newBook);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const newTitle = title.value;
	const newAuthor = author.value;
	const newPages = pages.value;
	const newRead = read.value;

	addBookToLibrary(newTitle, newAuthor, newPages, newRead);
	console.log(myLibrary);
	console.log(newAuthor);

	let library = myLibrary.map(function (myLibrary) {
		return `<div>
		Title: ${myLibrary.title} , Author: ${myLibrary.author} , Number of Pages: ${myLibrary.pages} , Pages read: ${myLibrary.read}
		</div>`;
	});
	library = library.join("");
	bookSection.innerHTML = library;
});
