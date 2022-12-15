import React from "react";
import Navbar from "./component/Navbar";

import "./App.css";
import BookList from "./component/BookList";
import ThemeContextProvider from "./context/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
