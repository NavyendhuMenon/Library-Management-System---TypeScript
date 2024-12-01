export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        return this.books.map((book) => `${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Borrowed"}`).join("\n");
    }
    getBooks() {
        return this.books;
    }
}
