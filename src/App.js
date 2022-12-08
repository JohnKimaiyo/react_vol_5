import React from "react";

import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import MyName from "./component/Myname";
import Form from "./component/Form";
import Mycount from "./component/Mycount";
import Users from "./component/Users";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Developer" />
      <Title name="Mobile Developer" />
      <Title name="Solodity Developer" />
      <MyName />
      <Form />
      <Mycount />
      <Users/>
    </div>
  );
}

export default App;
