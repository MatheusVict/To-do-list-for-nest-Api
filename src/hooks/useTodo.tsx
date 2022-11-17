import { ITodo } from "interfaces";
import { useCallback, useState } from "react";
import { todoService } from "services";

export const useTodo = () => {
  const [task, setTask] = useState<ITodo[]>([]);

  const getAll = useCallback(async () => {
    const { data, status } = await todoService.getAll();

    if(status !== 200) throw new Error();

    setTask(data);
    
  }, []);

  const createTodo = useCallback(async (todo: Pick<ITodo, 'task' | 'isDone'>) => {
    const { data, status } = await todoService.createTodo(todo);

    if(status !== 200) throw new Error();

  }, [])

  return {
    task,
    getAll,
    createTodo,
  }
};