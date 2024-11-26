import { useState } from "react";
import "./Style.css";
export function Addphoto() {
  const [greet, setGreet] = useState(0);
  return (
    <div>
      {/* <img src="\src\assets\krishna.jpg" alt="img-break" /> */}
      <img src="/src/assets/krishna.jpg" alt="img-break" />
      <h1>Hello {greet}</h1>
      <button onClick={() => setGreet(greet + 1)}>Click Me</button>
    </div>
  );
}
