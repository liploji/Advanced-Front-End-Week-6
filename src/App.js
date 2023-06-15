import Contact from "./Contact";
import Home from "./Home";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function navigate(page) {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      {currentPage === "Home" ? (
        <Home navigate={navigate} />
      ) : (
        <Contact navigate={navigate} />
      )}
    </div>
  );
}
