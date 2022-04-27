export interface ITodo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  createTodo: (title: string) => void;
  updateTodo: (id: number) => void;
};
