import { Book } from "./Book";

export class Member {

    private borrowedBooks : Book[] = []

    constructor(public name :string , public memberId :string){}

    borrowBook(book: Book): string {
        if (book.isAvailable) {
          this.borrowedBooks.push(book);
          return book.borrow();
        }
        return `Sorry, "${book.title}" is unavailable.`;
    }
    
    listBorrowedBooks(): string {
        if (this.borrowedBooks.length === 0) {
          return `${this.name} has no borrowed books.`;
        }
        return `${this.name} borrowed: ${this.borrowedBooks
          .map((b) => b.title)
          .join(", ")}`;
    }
}