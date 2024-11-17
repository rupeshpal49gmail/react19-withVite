// **** Default export method of the component  **** ///
function FirstComponents() {
  return (
    <div>
      <h1>
        This is the Firat Component of the Project by default export methods
      </h1>
    </div>
  );
}

export default FirstComponents;

// *** Individual export methods  *** ///
export function AddNumber() {
  let a = 10;
  let b = 20;
  let c = a + b;
  return (
    <div>
      <p>
        The addition of {a} and {b} is: {c}
      </p>
    </div>
  );
}
export function Greetmsg() {
  return (
    <div>
      <h1>Welcome to my Home</h1>
    </div>
  );
}
