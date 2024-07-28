import React, { useState } from "react";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { deleteTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {
  const { id, content } = todo;

  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleUpdate = () => {
    const payload: TodoType = {
      id,
      content: newTodo,
    };
    setEditable(false);
    dispatch(updateTodo(payload));
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-100 py-3">
      {!editable ? (
        <div>
          <input type="checkbox" id={"id:" + id} className="mr-2" />
          <label htmlFor={"id:" + id} className="select-none">
            {content}
          </label>
        </div>
      ) : (
        <input
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
          className="w-full border border-gray-200 mr-5 px-4 py-2 rounded-md outline-none focus:border-black"
        />
      )}
      <div>
        {!editable ? (
          <div>
            <button
              onClick={() => {
                dispatch(deleteTodoById(id));
              }}
              className="bg-red-600 hover:bg-red-700 transition ease-linear text-sm text-white px-3 py-2 rounded-lg mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setEditable(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 transition ease-linear text-sm text-white px-3 py-2 rounded-lg"
            >
              Edit
            </button>
          </div>
        ) : (
          <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 transition ease-linear text-sm text-white px-3 py-2 rounded-lg">
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
