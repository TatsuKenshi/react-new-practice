import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const author = "Lyla Jadeborn";

const Book = () => {
  const title = "The Secret Bookshop";
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Book Cover" height="250px" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
