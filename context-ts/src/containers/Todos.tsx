import { useContext } from "react";
import { ITodo, TodoContextType } from "../@types/todo";
import Todo from "../components/Todo";
import { TodoContext } from "../context/todoContext";

const Todos: React.FC = () => {
  const { todos, updateTodo } = useContext(TodoContext) as TodoContextType;
  return (
    <div className="flex flex-wrap mb-4">
      {todos.map((todo: ITodo) => (
        <div className="w-1/4 mb-6" key={todo.id}>
          <Todo updateTodo={updateTodo} todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default Todos;
