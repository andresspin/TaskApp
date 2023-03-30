import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/Taskcontext";



const TaskCard = ({ task}) => {
  // aqui se accede los valores traidos del context
  const {deleteTask} = useContext(TaskContext);
    
  


  return (
    <div key={task.id} className="bg-gray-800 text-white p-3 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-green-500  px-2 py-1 rounded-md mt-4 hover:bg-red-500"
        onClick={(e) => deleteTask(task.id)}
      >
        Eliminar Tarea{" "}
      </button>
    </div>
  );
};

export default TaskCard;
