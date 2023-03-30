import { useState, useContext } from "react";
import { TaskContext } from "../context/Taskcontext";

function Taskform() {
  //{createTask}
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  // aqui se accede los valores traidos del context
  const value = useContext(TaskContext);
  //console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault(); //por defecto el form se recarga y esta linea cancela ese comportamiento por defecto
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className=" bg-blue-300 p-10 mb-4">
        <h1 className="text-2xl font-extrabold text-blue-950 mb-3">Crea tu tarea</h1>
        <input
          placeholder="Ingresa la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="ingresa una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-600 hover:bg-red-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default Taskform;
