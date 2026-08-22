import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mike",
    age: 41,
    hobby: "kendo",
  });

  const switchUser = () => {
    if (person.name === "Mike") {
      setPerson({ name: "Melissa", age: 28, hobby: "WoW" });
    } else if (person.name === "Melissa") {
      // update only one property
      setPerson({ ...person, name: "John" });
    } else if (person.name === "John") {
      setPerson({ name: "Mike", age: 41, hobby: "kendo" });
    }
  };

  return (
    <div>
      <h4>User: {person.name}</h4>
      <h4>Age: {person.age}</h4>
      <h4>Hobby: {person.hobby}</h4>
      <button type="button" className="btn" onClick={switchUser}>
        switch user
      </button>
    </div>
  );
};

export default UseStateObject;
