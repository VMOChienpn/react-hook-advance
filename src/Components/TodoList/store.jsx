//import produce from "immer";
var redux = require("redux");

const initialState = {
  notes: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTENT":
      const addNote = { ...state, notes: [...state.notes, action.getItem] };
      return addNote;
    case "DELETE_CONTENT":
      const deleteNote = {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.id),
      };
      // console.log(deleteNote);
      // deleteNote.notes.filter((item) => item.id !== action.id);
      return deleteNote;
    default:
      return state;
  }
};
var store = redux.createStore(TodoReducer);
export default store;
