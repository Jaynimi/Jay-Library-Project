let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling",
		pages: 320,
		read: 0,
		statuss: "Not Read",
	},
	{
		title: "Harry Potter and the Chamber of Secrets",
		author: "J.K. Rowling",
		pages: 352,
		read: 0,
		statuss: "Not Read",
	},
	{
		title: "Harry Potter and the Prisoner of Azkaban",
		author: "J. K. Rowling",
		pages: 448,
		read: 0,
		statuss: "Not Read",
	},
	{
		title: "Harry Potter and the Goblet of Fire",
		author: "J. K. Rowling",
		pages: 752,
		read: 0,
		statuss: "Not Read",
	},

	{
		title: "Harry Potter and the Order of the Phoenix",
		author: "J. K. Rowling",
		pages: 870,
		read: 0,
		statuss: "Not Read",
	},
	{
		title: "Harry Potter and the Half-Blood Prince",
		author: "J. K. Rowling",
		pages: 652,
		read: 0,
		statuss: "Not Read",
	},
	{
		title: "Harry Potter and the Deathly Hallows",
		author: "J. K. Rowling",
		pages: 784,
		read: 0,
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
const nameForm = document.getElementById("beforeName");
const UserName = document.getElementById("submitNameInput");
const submitName = document.getElementById("submitNameBtn");
const specialGreeting = document.getElementById("specialGreeting");
const nav = document.getElementById("navHeader");
const nameIcon = document.getElementById("afterName");

// script.js
let prevScrollPosition = window.pageYOffset;

window.addEventListener("scroll", () => {
	const scrollPosition = window.pageYOffset;

	if (scrollPosition >= 60 && scrollPosition < prevScrollPosition) {
		nav.classList.add("sticky-shadow");
	} else {
		nav.classList.remove("sticky-shadow");
	}

	prevScrollPosition = scrollPosition;
});

const storedName = localStorage.getItem("username");

if (storedName) {
	nameForm.style.display = "none"; // or visibility: hidden if you prefer
	specialGreeting.textContent = `${storedName}'s`;
} else {
	nameForm.style.display = "block";

	nameForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const username = UserName.value;

		localStorage.setItem("username", username);

		nameForm.style.display = "none";

		specialGreeting.textContent = `${username}'s`; // Use 'username' instead of 'storedName'
		console.log(username);
	});
}

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

	// Store myLibrary in local storage
	localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Function to display books
function displayBooks() {
	bookSection.innerHTML = myLibrary
		.map((myBook, index) => {
			return `<div class="itemGrid">
						<div class="title">${myBook.title} </div>
						<div class="author"> ~${myBook.author} </div>
						<div class="pagesReadContainer">
							
							<i class="fa-solid fa-arrow-up increaseRead" data-index="${index}"></i>
							<span class="pagesRead">${myBook.read} </span> out of 
							<span class="totalPages"> ${myBook.pages} </span> Pages read
							<i class="fa-solid fa-arrow-down decreaseRead" data-index="${index}"></i> 
						</div>
						<div class="status" id="statusDisplay">${myBook.statuss} </div>
						<div class="trash">
							<button type="button" class="removeBook" data-index="${index}"><i data-index="${index}" class="fa-solid fa-trash-can"></i></button>
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

	// Store myLibrary in local storage
	localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
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
