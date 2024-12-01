//library.ts


import { Book } from "./Book";


export class Library {
    private books : Book[] = []

    addBook (book :Book) : void {

        this.books.push(book)

    }

    listBooks() :string{
        return this.books.map ((book)=> `${book.title} by ${book.author} - ${
        book.isAvailable ? "Available" : "Borrowed"}`).join("\n");
    }

    getBooks() :Book []{
        return this.books;
    }
}