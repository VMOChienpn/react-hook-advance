import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ListTodo() {
  const content = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const deleteContext = (id) => {
    dispatch({ type: "DELETE_CONTENT", id });
  };

  return (
    <div className="todolist h- main-color rounded-3xl m-5 p-8 overflow-x-auto">
      {content?.map((item, index) => (
        <div className="flex justify-center items-center my-8" key={item.id}>
          <p className="w-4/5 bg-white p-4 rounded-3xl text-xl">
            {item.content}
          </p>
          <button
            onClick={() => deleteContext(item.id)}
            className="w-24 h-12 bg-yellow-200 hover:bg-yellow-400 mx-6 rounded-full text-xl"
          >
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
