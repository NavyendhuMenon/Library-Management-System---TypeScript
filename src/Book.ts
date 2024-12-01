//book.ts

export abstract class Book {
    constructor(
        public title : string,
        public author : string,
        public isbn : string,
        public isAvailable : boolean = true

    ){}

    abstract borrow() : string

    returnBook () : string {
        this.isAvailable = true

        return `${this.title} has been returned`
    }
}

export class Fiction extends Book {
    borrow(): string {
      if (this.isAvailable) {
        this.isAvailable = false;
        return `Enjoy the fiction book "${this.title}".`;
      }
      return `"${this.title}" is currently unavailable.`;
    }
}
  
export  class NonFiction extends Book {
    borrow(): string {
      if (this.isAvailable) {
        this.isAvailable = false;
        return `Enjoy the non-fiction book "${this.title}".`;
      }
      return `"${this.title}" is currently unavailable.`;
    }
}
  
