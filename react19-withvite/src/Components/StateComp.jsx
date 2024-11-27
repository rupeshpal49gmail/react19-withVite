import { useState } from "react";

function StateChange() {
  const [ascendingOrder, setAscendingOrder] = useState(0);
  const [higher, setHigher] = useState(0);

  return (
    <div>
      <h1>Hello Rupesh :{ascendingOrder} </h1>
      <button
        id="btnIncrement"
        onClick={() => setAscendingOrder(ascendingOrder + 1)}
      >
        Increase Me
      </button>
      <button
        id="btnDecrement"
        onClick={() => setAscendingOrder(ascendingOrder - 1)}
      >
        Decrease Me
      </button>
      <h3>{higher}</h3>
      <button onClick={() => setHigher(higher + 1)}>Higher</button>
      {higher == 0 ? (
        <h1>Condition 0</h1>
      ) : higher == 1 ? (
        <h1>Condition 1</h1>
      ) : higher == 2 ? (
        <h1>Condition 2</h1>
      ) : higher == 3 ? (
        <h1>Condition 3 </h1>
      ) : higher == 4 ? (
        <h1>Condition 4</h1>
      ) : higher == 5 ? (
        <h1>Condition 5</h1>
      ) : higher == 6 ? (
        <h1>Condition 6</h1>
      ) : higher == 7 ? (
        <h1>Condition 7</h1>
      ) : (
        <h1>Wrong entry</h1>
      )}
    </div>
  );
}

export default StateChange;
