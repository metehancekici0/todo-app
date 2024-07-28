import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

function CreateTodo() {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    if (todo.trim().length == 0) {
      alert("todo giriniz!");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999),
      content: todo,
    };
    dispatch(createTodo(payload));
    setTodo("");
  };
  return (
    <div className="flex mb-10">
      <input
        type="text"
        className="w-full outline-none mr-2 border rounded-lg px-3 py-2 border-gray-300 focus:border-violet-500"
        placeholder="Add New Todo"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
      />
      <button onClick={handleCreateTodo} className="bg-violet-500 px-4 py-2 rounded-lg text-white">
        Oluştur
      </button>
    </div>
  );
}

export default CreateTodo;
