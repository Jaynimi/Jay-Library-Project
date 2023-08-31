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
	return newBook;
}

// Function to display books
function displayBooks() {
	bookSection.innerHTML = myLibrary
		.map((myBook, index) => {
			return `<div> Title: ${myBook.title} , Author: ${myBook.author} , Number of Pages: ${myBook.pages} , Pages read: ${myBook.read}
        <button type="button" class="removeBook" data-index="${index}">Remove</button>
        </div>`;
		})
		.join("");

	// Attach event listeners to remove buttons
	const removeButtons = document.querySelectorAll(".removeBook");
	removeButtons.forEach((button) => {
		button.addEventListener("click", handleRemoveClick);
	});
}

// Function to handle remove button click
function handleRemoveClick(e) {
	const indexToRemove = e.target.getAttribute("data-index");
	myLibrary.splice(indexToRemove, 1);
	displayBooks(); // Update the displayed books
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

	displayBooks(); // Update the displayed books
});

// Initial display of books
displayBooks();
