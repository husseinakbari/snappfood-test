import { NOTEVISIBILE, SAVENOTE } from "./types";

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
