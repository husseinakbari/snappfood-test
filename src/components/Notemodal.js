import React , {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {handleVisible , saveNote} from '../store/actions'

const Notemodal = () => {
  const dispatch = useDispatch();
  const inputNote = useRef(null);

  const handleButton = type => {
    switch (type) {
      case "save":
        const text = inputNote.current.value;
        if(text.length > 0) {
          dispatch(saveNote(text));
          dispatch(handleVisible(false));
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
              <h4>Create New Note</h4>
            </div>
            <div className="content">
              <textarea name="" id="" cols="30" rows="10" ref={inputNote}/>
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
