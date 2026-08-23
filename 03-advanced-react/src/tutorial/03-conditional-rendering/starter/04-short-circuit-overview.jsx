import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("mike");

  return (
    <div>
      <p>Falsy OR: {text || "hello world"}</p>
      <p>Falsy AND: {text && "hello world"}</p>
      <p>Truthy OR: {name || "hello world"}</p>
      <p>Truthy AND: {name && "hello world"}</p>
    </div>
  );
};
export default ShortCircuitOverview;
