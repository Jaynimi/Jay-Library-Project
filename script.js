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

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const newTitle = title.value;
	const newAuthor = author.value;
	const newPages = pages.value;
	const newRead = read.value;

	addBookToLibrary(newTitle, newAuthor, newPages, newRead);
	console.log(myLibrary);
	console.log(newAuthor);

	bookSection.innerHTML = myLibrary
		.map((myBook, index) => {
			return `<div> Title: ${myBook.title} , Author: ${myBook.author} , Number of Pages: ${myBook.pages} , Pages read: ${myBook.read}
        <button type="button" class="removeBook" data-index="${index}">Remove</button>
        </div>`;
		})
		.join("");

	const removeButtons = document.querySelectorAll(".removeBook");
	removeButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const indexToRemove = e.target.getAttribute("data-index");
			myLibrary.splice(indexToRemove, 1);
			bookSection.innerHTML = myLibrary
				.map((myBook, index) => {
					return `<div> Title: ${myBook.title} , Author: ${myBook.author} , Number of Pages: ${myBook.pages} , Pages read: ${myBook.read}
                    <button type="button" class="removeBook" data-index="${index}">Remove</button>
                    </div>`;
				})
				.join("");
		});
	});
});
console.log(myLibrary);

// let library = myLibrary.map(function (myBook, i) {
// 	const a = myLibrary.length - 1;
// 	return `<div>
//     Title: ${myBook.title} , Author: ${myBook.author} , Number of Pages: ${myBook.pages} , Pages read: ${myBook.read}
//     <button type="button" id="removeBook_${i}" index=${i}  >Remove</button>
//     </div>`;
// });
// const i = library.length - 1;
// console.log(i);

// library = library.join("");
// bookSection.innerHTML = library;

// const remove = document.getElementById(`removeBook_${i}`);

// document.getElementById(`removeBook_${i}`).onclick = function () {
// 	myFunction();
// };

// function myFunction() {
// 	document.getElementById(`removeBook_${i}`).innerHTML = "YOU CLICKED ME!";
// }
