import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Welcome! Click the button to increase the count.");
  }, []);
  useEffect(() => {
    console.log("Current count:", count);
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};
export default Counter;