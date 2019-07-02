import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Notes = () => {
  const { note } = useSelector(state => state);
  return (
    <div className="note-list">
      {note && note.notes && note.notes.length > 0
        ? note.notes.map((el, index) => (
            <div className="note" key={index}>
              <p>{el.text}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Notes;
