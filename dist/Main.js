var _a;
import { Fiction, NonFiction } from "./Book";
import { Library } from "./Library";
const library = new Library();
library.addBook(new Fiction("The Goat Life", "Benyamin", "12345"));
library.addBook(new NonFiction("Ivory Thrones", "Manu S Pillai", "67890"));
(_a = document.getElementById("listBooks")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const output = document.getElementById("output");
    if (output) {
        output.textContent = library.listBooks();
    }
});
