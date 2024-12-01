//main.ts
var _a, _b, _c, _d, _e;
import { Fiction } from "./Book.js";
import { Library } from "./Library.js";
import { Member } from "./Member.js";
const library = new Library();
const member1 = new Member("Navyendhu", "M001");
const member2 = new Member("Navaneeth", "M002");
function populateBookSelect() {
    const bookSelect = document.getElementById("bookSelect");
    bookSelect.innerHTML = `<option value="">Select a Book</option>`;
    library.getBooks().forEach((book, index) => {
        const option = document.createElement("option");
        option.value = index.toString();
        option.textContent = `${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Unavailable"}`;
        bookSelect.appendChild(option);
    });
}
// Add Book
(_a = document.getElementById("addBookForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const isbn = document.getElementById("bookIsbn").value;
    const newBook = new Fiction(title, author, isbn); // You can use Fiction or NonFiction based on your choice
    library.addBook(newBook);
    populateBookSelect(); // Update the dropdown with the new book
    // Clear form fields
    document.getElementById("bookTitle").value = '';
    document.getElementById("bookAuthor").value = '';
    document.getElementById("bookIsbn").value = '';
});
// Borrow Book
(_b = document.getElementById("borrowBook")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const bookSelect = document.getElementById("bookSelect");
    const selectedBookIndex = parseInt(bookSelect.value);
    if (selectedBookIndex >= 0) {
        const book = library.getBooks()[selectedBookIndex];
        const message = member1.borrowBook(book);
        showMessage(message);
    }
    else {
        showMessage("Please select a book to borrow.");
    }
});
// Return Book
(_c = document.getElementById("returnBook")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const bookSelect = document.getElementById("bookSelect");
    const selectedBookIndex = parseInt(bookSelect.value);
    if (selectedBookIndex >= 0) {
        const book = library.getBooks()[selectedBookIndex];
        const returnMessage = book.returnBook();
        showMessage(returnMessage);
        populateBookSelect();
    }
    else {
        showMessage("Please select a book to return.");
    }
});
(_d = document.getElementById("listBooks")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    const output = document.getElementById("output");
    if (output) {
        output.textContent = library.listBooks();
    }
});
(_e = document.getElementById("listBorrowedBooks")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    const output = document.getElementById("output");
    if (output) {
        output.textContent = member1.listBorrowedBooks();
    }
});
function showMessage(message) {
    const output = document.getElementById("output");
    if (output) {
        output.textContent = message;
    }
}
populateBookSelect();
