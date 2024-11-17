import { useState } from "react";
import "./App.css";
import FirstComponents, { AddNumber, Greetmsg } from "./Components/FirstComp";
import HeyClass from "./Components/ClassComp";
import { Addphoto } from "./Components/Task";

function App() {
  return (
    <div>
      <FirstComponents />
      <h1>I am comming from the first App.js File</h1>
      <AddNumber />
      <Greetmsg />
      <HeyClass />
      <Addphoto />
    </div>
  );
}

export default App;
