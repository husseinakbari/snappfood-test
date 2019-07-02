import {
  NOTEVISIBILE,
  SAVENOTE,
  SHOWNOTE,
  UPDATENOTE,
  DELETENOTE
} from "./types";

export const handleVisible = status => {
  return {
    type: NOTEVISIBILE,
    payload: status
  };
};
export const saveNote = text => {
  return {
    type: SAVENOTE,
    payload: text
  };
};
export const showNote = (id, text) => {
  return {
    type: SHOWNOTE,
    payload: { id, text }
  };
};

export const updateNote = (id, text) => {
  return {
    type: UPDATENOTE,
    payload: { id, text }
  };
};
export const deleteNote = id => {
  return {
    type: DELETENOTE,
    payload: id
  };
};