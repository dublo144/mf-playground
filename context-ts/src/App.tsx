import AddTodo from "./components/AddTodo";
import Todos from "./containers/Todos";
import TodoProvider from "./context/todoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center h-screen w-screen bg-indigo-400">
        <h1 className="text-6xl font-black h-1/4 pt-12 text-white">My Todos</h1>

        <div className="h-2/4 w-screen">
          <Todos />
        </div>

        <div className="h-1/4 w-screen">
          <AddTodo />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
