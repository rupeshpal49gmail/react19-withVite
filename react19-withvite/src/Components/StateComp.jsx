import { useState } from "react";

function StateChange() {
  const [ascendingOrder, setAscendingOrder] = useState(0);

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
    </div>
  );
}

export default StateChange;
