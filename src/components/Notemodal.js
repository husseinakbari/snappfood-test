import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleVisible, saveNote, updateNote } from "../store/actions";

const Notemodal = () => {
  const dispatch = useDispatch();
  const { note } = useSelector(state => state);
  const inputNote = useRef(null);
  const [noteText, setNoteText] = useState(
    note.noteContent ? note.noteContent.text : ""
  );

  const handleButton = type => {
    switch (type) {
      case "save":
        const text = inputNote.current.value;
        if (text.length > 0) {
          if (note.noteContent) {
            dispatch(updateNote(note.noteContent.id, noteText));
          } else {
            dispatch(saveNote(text));
          }
        }

        break;
      case "cancel":
        dispatch(handleVisible(false));
        break;
      default:
        break;
    }
  };

  return (
    <div className="note-modal-container">
      <div className="modal-wrapper">
        <div className="wrapper">
          <div className="note-modal">
            <div className="header">
              <h4>
                {note.noteContent
                  ? `Note ${note.noteContent.id}`
                  : "Create New Note"}
              </h4>
            </div>
            <div className="content">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                ref={inputNote}
                value={noteText}
                onChange={e => {
                  e.preventDefault();
                  setNoteText(e.target.value);
                }}
              />
            </div>
            <div className="footer">
              <div>
                <button
                  onClick={e => {
                    e.preventDefault();
                    handleButton("save");
                  }}
                >
                  <span>Save</span>
                </button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    handleButton("cancel");
                  }}
                >
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notemodal;
