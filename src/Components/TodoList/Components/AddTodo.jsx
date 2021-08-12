import React, { useState } from "react";
import { v1 as uuid } from "uuid";

import { useDispatch } from "react-redux";

function AddTodo() {
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();

  const onchangValueHandle = (e) => {
    const valueInput = e.target.value;
    setcontent(valueInput);
  };

  const addContent = (e) => {
    e.preventDefault();
    if (content === "") {
      alert("Nhập text để thêm");
    } else {
      var getItem = {};
      getItem.id = uuid();
      getItem.content = content;
      dispatch({ type: "ADD_CONTENT", getItem });
    }
  };

  return (
    <form className="todolist__addTodo main-color flex items-center justify-center h-24 m-5 rounded-full">
      <input
        id="mainInput"
        onChange={onchangValueHandle}
        className="h-12 w-3/6 rounded-full px-5 outline-none"
        type="text"
        placeholder="Thêm mới"
      />
      <button
        type="reset"
        onClick={addContent}
        className="w-24 h-12 bg-yellow-200 hover:bg-yellow-400 mx-6 rounded-full text-xl"
      >
        Thêm
      </button>
    </form>
  );
}

export default AddTodo;
