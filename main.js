let myLibrary = [
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
	{
		title: "The MounTain is You",
		arthor: "Someone",
		pages: 64,
		read: 40,
		statuss: "Not Read",
	},
];

const bookSection = document.getElementById("bookSection");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const form = document.getElementById("form");
const statuss = document.getElementById("status");

function Book(title, author, pages, read, statuss) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.statuss = statuss;
}

function addBookToLibrary(title, author, pages, read, statuss) {
	// do stuff here
	if (title.length === 0 || author.length === 0 || pages.length === 0) {
		alert("Fill all the fields");
		return;
	}

	if (read > pages) {
	}
	const newBook = new Book(title, author, pages, read, statuss);
	// newBook.display();
	myLibrary.push(newBook);
	return newBook;
}

// Function to display books
function displayBooks() {
	bookSection.innerHTML = myLibrary
		.map((myBook, index) => {
			return `<div class="itemGrid">
				<div class="title"> Title: ${myBook.title} </div>
				<div class="author"> Author: ${myBook.author} </div>
				<div class="totalPages"> Number of Pages: ${myBook.pages} </div>
				<div class="pagesReadContainer"> 
					Pages read: <span class="pagesRead">${myBook.read} </span> 
					<i class="fa-solid fa-arrow-up increaseRead" data-index="${index}"></i>
					<i class="fa-solid fa-arrow-down decreaseRead" data-index="${index}"></i> 
				</div>
				<div class="status" id="statusDisplay"> Status: ${myBook.statuss} </div>
				<div class="trash">
					<button type="button" class="removeBook" data-index="${index}">Remove</button>
				</div>
		  </div>`;
		})
		.join("");

	// Attach event listeners to remove buttons
	const removeButtons = document.querySelectorAll(".removeBook");
	removeButtons.forEach((button) => {
		button.addEventListener("click", handleRemoveClick);
	});

	// Attach event listeners to increaseRead buttons
	const increaseButtons = document.querySelectorAll(".increaseRead");
	increaseButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const index = e.target.getAttribute("data-index");
			myLibrary[index].read++; // Increase the read count
			// Update the displayed pages read
			const pagesReadElement = document.querySelector(`.pagesRead`);
			pagesReadElement.textContent = myLibrary[index].read;
			// Call displayBooks to update the display
			displayBooks();
		});
	});

	// Attach event listeners to decreaseRead buttons
	const decreaseButtons = document.querySelectorAll(".decreaseRead");
	decreaseButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const index = e.target.getAttribute("data-index");
			if (myLibrary[index].read > 0) {
				myLibrary[index].read--; // Decrease the read count (if greater than 0)
				// Update the displayed pages read
				const pagesReadElement = document.querySelector(`.pagesRead`);
				pagesReadElement.textContent = myLibrary[index].read;

				// Call displayBooks to update the display
				displayBooks();
			}
		});
	});

	// Attach event listeners to Read Status display
	const statusDisplays = document.querySelectorAll("#statusDisplay");
	statusDisplays.forEach((statusDisplay, index) => {
		statusDisplay.addEventListener("click", () => {
			// Toggle the status
			myLibrary[index].statuss =
				myLibrary[index].statuss === "Read" ? "Not Read" : "Read";

			if (myLibrary[index].statuss === "Not Read") {
				myLibrary[index].read = 0;
			}
			displayBooks(); // Update the displayed books
		});
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
	const newStatuss = statuss.value;

	addBookToLibrary(newTitle, newAuthor, newPages, newRead, newStatuss);
	console.log(myLibrary);
	console.log(newAuthor);

	displayBooks(); // Update the displayed books
});

// Initial display of books
displayBooks();
