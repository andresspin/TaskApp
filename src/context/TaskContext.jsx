import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  // let x = 20;
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const DeleteTask = (taskId) => {
    // console.log(tasks);
    // console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: DeleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
