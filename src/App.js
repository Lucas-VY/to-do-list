import { useRef, useState } from 'react';
import './App.css';

function App() {

  let nameRef = useRef(null);
  const [task, setTask] = useState ([]);

  const AddTask = (e) => {
    if (e.keyCode === 100 && nameRef.value !== ""){
      setTask(task.concat(nameRef.value));
      nameRef.value="";
    }
  }
  const AddTaskB = (e) => {
    if (nameRef.value !== "")
      setTask(task.concat(nameRef.value));
      nameRef.value="";
  }

  const deleteTask = (index) => {
    task.splice(index,1);
    setTask([...task]);
  };


    return (
      
      <div className="container">
        <div className="card mt-5">
          <div className="card-body" >
            <h1 className="card-title text-center">To-Do List</h1>
            <ul className="list-group list-group">
              <div className="input-group mb-3 list-group list-group">
                <input onKeyUp={AddTask} ref={r => nameRef = r} type="text" id="input" className="list-group-item" placeholder="Add a new Task!" />
                <div className="input-group-append list-group list-group">
                  <button onClick={AddTaskB} className="btn btn-sm btn-success" type="button" id="button">Add</button>
                </div>
              </div>
              {
                !!task.length > 0 &&
                task.map((value, index) => {
                  return (
                    <li className="list-group-item" key={index}>{value} <i className="fas fa-trash float-right" id="delete" onClick={() => deleteTask(index)}></i></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="card-footer text-muted">
            <strong>Current Nº of tasks {task.length}</strong> 
          </div>
        </div>
        </div>
      

    )
  }

  export default App;
