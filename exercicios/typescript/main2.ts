type Book = {
  title: string;
  author: string;
  pages: number;
  published?: boolean; // Opcional
};

let book1: Book = {
  title: "Fundação",
  author: "Isaac Asimov",
  pages: 244
};

let book2: Book = { // Reutilizamos o tipo!
  title: "Duna",
  author: "Frank Herbert",
  pages: 412,
  published: true
};

const books = [book1, book1]; // Array de livros

let direction: "norte" | "sul" | "leste" | "oeste";
direction = "norte"; // OK
// direction = "cima"; // ERRO no TS!

let statusCode: 200 | 404 | 500;
statusCode = 200; // OK
// statusCode = 201; // ERRO no TS!