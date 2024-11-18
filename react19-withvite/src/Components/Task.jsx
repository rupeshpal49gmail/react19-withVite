import "./Style.css";
export function Addphoto() {
  return (
    <div>
      {/* <img src="\src\assets\krishna.jpg" alt="img-break" /> */}
      <img src="/src/assets/krishna.jpg" alt="img-break" />
      <h1>Hello</h1>
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
}

function clickMe() {
  alert("I am clicked");
}
