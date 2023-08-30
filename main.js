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

// function removeFunc(e) {
// 	// const index = e.currentTarget.getAttribute("index");
// 	let a = myLibrary.length;
// 	console.log(a);
// 	// myLibrary.splice(index, 1);
// 	// renderLibrary();
// }

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const newTitle = title.value;
	const newAuthor = author.value;
	const newPages = pages.value;
	const newRead = read.value;

	addBookToLibrary(newTitle, newAuthor, newPages, newRead);
	console.log(myLibrary);
	console.log(newAuthor);

	let library = myLibrary.map(function (myBook, i) {
		const a = myLibrary.length - 1;
		return `<div>
		Title: ${myBook.title} , Author: ${myBook.author} , Number of Pages: ${myBook.pages} , Pages read: ${myBook.read}
		<button type="button" id="removeBook_${i}" index=${i}  >Remove</button>
		</div>`;
	});
	const i = library.length - 1;
	console.log(i);

	library = library.join("");
	bookSection.innerHTML = library;

	const remove = document.getElementById(`removeBook_${i}`);

	document.getElementById(`removeBook_${i}`).onclick = function () {
		myFunction();
	};

	function myFunction() {
		document.getElementById(`removeBook_${i}`).innerHTML = "YOU CLICKED ME!";
	}

	// remove.addEventListener("click", function removeFunc(e) {
	// 	let index = e.currentTarget.getAttribute("index");
	// 	console.log(index);
	// });

	// function removeFunc() {==
	// 	console.log("pretty");
	// }

	// remove.addEventListener("click", removeFunc);==
});

// remove.addEventListener("click", function removeFunc(e) {
// 	let index = e.currentTarget.getAttribute("index");
// 	console.log(index);
// 	// myLibrary.splice(index, 1);
// 	// renderLibrary();
// });

// id="removeBook_${i}"
// onclick="removeFunc()"
