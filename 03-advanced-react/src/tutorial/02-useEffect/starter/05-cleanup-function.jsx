import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [user, setUser] = useState(false);
  console.log("render");

  return (
    <>
      <div>
        <h2>Cleanup Function Example</h2>
        <button
          className="btn"
          type="button"
          onClick={() => {
            setUser(!user);
          }}
        >
          click me
        </button>
      </div>
      {user && <SecondComponent />}
    </>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    // console.log("initial render");
    const intID = setInterval(() => {
      // console.log("Hello from interval");
    }, 1000);
    return () => {
      clearInterval(intID);
      console.log("cleanup");
    };
  }, []);

  useEffect(() => {
    const someFunc = () => {
      // some code
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);

  return (
    <div>
      <h2>Second component</h2>
    </div>
  );
};

export default CleanupFunction;
