import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <>
      <div>
        <Person />
        <Message />
      </div>
    </>
  );
}

const Person = () => <h2 className="classOne">My first React component.</h2>;

const Message = () => {
  return <p>this is a paragraph</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
