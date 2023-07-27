import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const callApi = async () => {
    const res = await fetch(
      "https://github.com/ONDC-Official/mobility-specification/blob/draft-1.x/ui/build.js"
    );
    const ParsedData = await res.json();
    console.log("ParsedData", ParsedData);
  };

  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
