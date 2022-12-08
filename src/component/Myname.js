import React from "react";
import { useState } from "react";

function MyName() {
  const [name, setName] = useState("John");
  const changeName = () => {
    setName("kimaiyo");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}>CLick me</button>
    </div>
  );
}

export default MyName;
