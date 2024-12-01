//main.ts

import { Fiction ,NonFiction } from "./Book"
import { Library } from "./Library"
import { Member } from "./Member";


const library = new Library();
const member1 = new Member("Navyendhu", "M001")
const member2 = new Member("Navaneeth", "M002")


function populateBookSelect() {
  const bookSelect = document.getElementById("bookSelect") as HTMLSelectElement;
  bookSelect.innerHTML = `<option value="">Select a Book</option>`

  library.getBooks().forEach((book, index) => {
    const option = document.createElement("option");
    option.value = index.toString();
    option.textContent = `${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Unavailable"}`;
    bookSelect.appendChild(option);
  });
}

// Add Book
document.getElementById("addBookForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = (document.getElementById("bookTitle") as HTMLInputElement).value;
  const author = (document.getElementById("bookAuthor") as HTMLInputElement).value;
  const isbn = (document.getElementById("bookIsbn") as HTMLInputElement).value;

  const newBook = new Fiction(title, author, isbn); // You can use Fiction or NonFiction based on your choice
  library.addBook(newBook);
  populateBookSelect(); // Update the dropdown with the new book

  // Clear form fields
  (document.getElementById("bookTitle") as HTMLInputElement).value = '';
  (document.getElementById("bookAuthor") as HTMLInputElement).value = '';
  (document.getElementById("bookIsbn") as HTMLInputElement).value = '';
});

// Borrow Book
document.getElementById("borrowBook")?.addEventListener("click", () => {
  const bookSelect = document.getElementById("bookSelect") as HTMLSelectElement;
  const selectedBookIndex = parseInt(bookSelect.value);
  if (selectedBookIndex >= 0) {
    const book = library.getBooks()[selectedBookIndex];
    const message = member1.borrowBook(book);
    showMessage(message);
  } else {
    showMessage("Please select a book to borrow.");
  }
});

// Return Book
document.getElementById("returnBook")?.addEventListener("click", () => {
  const bookSelect = document.getElementById("bookSelect") as HTMLSelectElement;
  const selectedBookIndex = parseInt(bookSelect.value);
  if (selectedBookIndex >= 0) {
    const book = library.getBooks()[selectedBookIndex];
    const returnMessage = book.returnBook();
    showMessage(returnMessage);
    populateBookSelect()
  } else {
    showMessage("Please select a book to return.");
  }
});


document.getElementById("listBooks")?.addEventListener("click", () => {
  const output = document.getElementById("output");
  if (output) {
    output.textContent = library.listBooks();
  }
});

document.getElementById("listBorrowedBooks")?.addEventListener("click", () => {
  const output = document.getElementById("output");
  if (output) {
    output.textContent = member1.listBorrowedBooks();
  }
});

function showMessage(message: string) {
  const output = document.getElementById("output");
  if (output) {
    output.textContent = message;
  }
}

populateBookSelect();