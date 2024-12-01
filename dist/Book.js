export class Book {
    constructor(title, author, isbn, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }
    returnBook() {
        this.isAvailable = true;
        return `${this.title} has been returned`;
    }
}
export class Fiction extends Book {
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `Enjoy the fiction book "${this.title}".`;
        }
        return `"${this.title}" is currently unavailable.`;
    }
}
export class NonFiction extends Book {
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `Enjoy the non-fiction book "${this.title}".`;
        }
        return `"${this.title}" is currently unavailable.`;
    }
}
