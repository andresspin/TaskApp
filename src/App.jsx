import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useState, useEffect } from "react";

function App() {
 
  return (
    <main className=" bg-sky-800 h-screen ">
      <div className="container mx-auto bg-sky-800 p-10">
        <TaskForm />
        <TaskList />
      </div>
      {/* <TaskForm createTask={createTask}></TaskForm>
      <TaskList tasks={tasks} DeleteTask = {DeleteTask}></TaskList> 
      De esta forma se pasaban las funciones como props pero se dejan normal por el context*/}
    </main>
  );
}

export default App;
