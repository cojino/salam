import React from "react";

const Student = ({ text, e, setText, text2 }) => {
  const deleteHandler = () => {
    setText(text2.filter((el) => el.id !== e.id));
  };
  return (
    <div>
      <ul>
        <li>{text}</li>
        <button onClick={deleteHandler}>delete</button>
      </ul>
    </div>
  );
};

export default Student;
