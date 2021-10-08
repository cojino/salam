import React, { useRef } from "react";

const Form = ({ nState, setNState, text, setText, filterL }) => {
  const Tache = useRef();
  //this is for change
  const changeHandeler = (e) => {
    setNState(e.target.value);
  };
  //this will be for what happen after i click
  const clickHandeler = (e) => {
    e.preventDefault();
    setText([...text, { newText: nState, id: Math.random() * 1000 }]);
    setNState("");
  };

  return (
    <>
      <h2>STUDENT</h2>
      <div>
        <input
          ref={Tache}
          value={nState}
          onChange={changeHandeler}
          type="text"
        />
        <button onClick={clickHandeler}>
          <i className="fas fa-plus-square" />
        </button>
      </div>
      <hr />
      <div>
        <input type="text" />
        <button onClick={() => filterL(Tache.current.value)}>
          <i className="fas fa-search" />
        </button>
      </div>
    </>
  );
};

export default Form;
