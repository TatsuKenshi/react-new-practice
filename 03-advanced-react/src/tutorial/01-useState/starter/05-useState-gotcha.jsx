import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  const increaseValue = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };

  const increaseTimeout = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h4>{value}</h4>
      <div>
        <button type="button" className="btn" onClick={increaseValue}>
          increase
        </button>
      </div>
      <div>
        <button type="button" className="btn" onClick={increaseTimeout}>
          timeout
        </button>
      </div>
    </div>
  );
};

export default UseStateGotcha;
