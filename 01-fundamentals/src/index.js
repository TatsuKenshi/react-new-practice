import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="./images/book-1.jpg" alt="book cover" />;
};

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};

const Author = () => {
  return <p>Jordan Moore</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
