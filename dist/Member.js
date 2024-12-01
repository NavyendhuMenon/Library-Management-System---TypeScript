//member.ts
export class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            return book.borrow();
        }
        return `Sorry, "${book.title}" is unavailable.`;
    }
    listBorrowedBooks() {
        if (this.borrowedBooks.length === 0) {
            return `${this.name} has no borrowed books.`;
        }
        return `${this.name} borrowed: ${this.borrowedBooks
            .map((b) => b.title)
            .join(", ")}`;
    }
}
