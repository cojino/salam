import React from "react";
import Student from "./Student";

const Students = ({ text, setText }) => {
  return (
    <div>
      <ul>
        {text.map((e) => (
          <Student
            setText={setText}
            text2={text}
            text={e.newText}
            e={e}
            key={e.id}
            id={e.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Students;
