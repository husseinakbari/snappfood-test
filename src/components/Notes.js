import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {showNote , deleteNote} from '../store/actions'

const Notes = () => {
  const { note } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="note-list">
      {note && note.notes && note.notes.length > 0
        ? note.notes.map((el, index) => (
            <div className="note" key={index}>
              <h3>{`Note ${el.id}`}</h3>
              <p>{el.text.substring(0 , 50)} {el.text.length > 50 ? "..." : ""}</p>
               <div className="action">
                <button
                    onClick={e => {
                      e.preventDefault()
                      dispatch(showNote(el.id , el.text));
                    }}
                >
                    <span>View</span>
                </button>
                <button
                  onClick={e => {
                    e.preventDefault()
                    dispatch(deleteNote(el.id))
                  }}
                >
                    <span>Delete</span>
                </button>
            </div> 
            </div>
          ))
        : null}
    </div>
  );
};

export default Notes;
