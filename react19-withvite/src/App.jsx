import { useState } from "react";
import "./App.css";
import FirstComponents, { AddNumber, Greetmsg } from "./Components/FirstComp";
import HeyClass from "./Components/ClassComp";

function App() {
  return (
    <div>
      <FirstComponents />
      <h1>I am comming from the first App.js File</h1>
      <AddNumber />
      <Greetmsg />
      <HeyClass />
    </div>
  );
}

export default App;
