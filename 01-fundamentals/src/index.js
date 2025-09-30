import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";

const booksList = [
  {
    image: img1,
    title: "Interesting Facts For Curious Minds",
    author: "Jordan Moore",
    id: 1,
  },
  {
    image: img2,
    title: "Atomic Habits",
    author: "James Clear",
    id: 2,
  },
  {
    image: img3,
    title: "Fairy Tale",
    author: "Stephen King",
    id: 3,
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {booksList.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    console.log("handle button click");
  };
  return (
    <section>
      <form>
        <h2>typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { image, title, author, children } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
