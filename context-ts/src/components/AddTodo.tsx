import React, { useContext, useState } from "react";
import { TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const { createTodo } = useContext(TodoContext) as TodoContextType;
  const [title, setTitle] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div className="relative z-0 w-1/2 mb-6 group mx-auto">
        <input
          type="text"
          name="floating_title"
          onChange={handleInput}
          value={title}
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-white peer text-center"
          placeholder=" "
          required
          autoComplete="off"
        />
        <label
          htmlFor="floating_title"
          className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          What needs to be done?
        </label>
      </div>
    </form>
  );
};

export default AddTodo;
