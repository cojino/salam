import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";
import Students from "./components/Students";

function App() {
  const [nState, setNState] = useState("");
  const [text, setText] = useState([]);

  const filterList = (tache) => {
    //tache.preventDefault();
    setText([...text.filter((task) => task.newText.includes(tache))]);
  };

  return (
    <div className="App">
      <Form
        nState={nState}
        setNState={setNState}
        text={text}
        setText={setText}
        filterL={filterList}
      />
      <Students setText={setText} text={text} />
    </div>
  );
}

export default App;
