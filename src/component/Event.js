import React from "react";

export default function Event() {
  const testClick = () => {
    alert("hey you just clicked me");
  };
  return (
    <div className="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
