import { ITodo } from "interfaces";
import { api } from "provider";

const getAll = () => api.get<ITodo[]>('/todo');

const createTodo = (todo: Pick<ITodo, 'task' | 'isDone'>) => api.post('/todo', todo);

export const todoService = {
  getAll,
  createTodo,
};