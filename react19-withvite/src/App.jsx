import { useState } from "react";
import "./App.css";
import FirstComponents, { AddNumber, Greetmsg } from "./Components/FirstComp";

function Ok() {
  return (
    <div>
      <FirstComponents />
      <h1>I am comming from the first App.js File</h1>
      <AddNumber />
      <Greetmsg />
    </div>
  );
}

export default Ok;
