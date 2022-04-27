import { ITodo } from "../@types/todo";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-64">
        <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">
          {todo.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{todo.description}</p>
        <button
          type="button"
          onClick={() => updateTodo(todo.id)}
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
