import React from "react";
import Navbar from "./component/Navbar";

import "./App.css";
import BookList from "./component/BookList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
