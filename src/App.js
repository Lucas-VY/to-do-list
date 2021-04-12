import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState ([]);
  let nameRef = useRef(null);

  const Addtodo = (e) => {
    if (e.key === 100 && nameRef.value !== ""){
      setTodo(todo.concat(nameRef.value));
      nameRef.value="";
    }
  }
  const Addtodo2 = (e) => {
    if (nameRef.value !== "")
      setTodo(todo.concat(nameRef.value));
      nameRef.value="";
  }

  const deletetodo = (index) => {
    todo.splice(index,1);
    setTodo([...todo]);
  };

  

    return (
      
      <div className="container">
        <div className="card mt-5">
          <div className="card-body" >
            <h1 className="card-title text-center">To-Do List</h1>
            <ol className="list-group list-group">
              <div className="input-group mb-3 list-group list-group">
                <input onKeyUp={Addtodo} ref={r => nameRef = r} type="text" id="input" className="list-group-item" placeholder="Add a new To-Do!" />
                <div className="input-group-append list-group list-group">
                  <button onClick={Addtodo2} className="btn btn-sm btn-success" type="button" id="button">Add</button>
                </div>
              </div>
              {
                !!todo.length > 0 &&
                todo.map((value, index) => {
                  return (
                    <li className="list-group-item py-1" key={index}>{value} 
                    <i className="btn btn-danger btn-md fas fa-trash-alt float-right" id="delete" 
                      onClick={() => deletetodo(index)}></i></li>
                  )
                })
              }
            </ol>
          </div>
          <div className="card-footer">
            <strong>Current Nº of To-Do: {todo.length}</strong> 
          </div>
        </div>
        </div>
      

    )
  }

  export default App;
