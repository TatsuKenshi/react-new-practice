import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeMe = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  const clearList = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeMe(id)}>remove {name}</button>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => setPeople([])}
          className="btn"
          style={{ marginTop: "2rem" }}
        >
          clear list
        </button>
        <button
          onClick={clearList}
          className="btn"
          style={{ marginTop: "2rem" }}
        >
          clear list
        </button>
      </div>
    </div>
  );
};

export default UseStateArray;
