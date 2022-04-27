import React, { createContext, useState } from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const TodoProvider: React.FC<Props> = ({ children }) => {
  const initialState: ITodo[] = [
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'Hi',
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState<ITodo[]>(initialState);

  const createTodo = (title: string) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: title,
      description: '',
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
