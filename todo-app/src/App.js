import './App.css';
import  { useState } from "react";
import { useEffect } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//all todos are objects with attributes "item" and "checked" eg:
/*
{
  item: "do shopping",
  checked: false
};
*/

function App() {

  useEffect(() => {
    console.log('using effect');
    let json = localStorage.getItem('todos');
    console.log(json);
    if (json !== null) {
      console.log("json has a value: " + json)
      setTodos(JSON.parse(json));
    } else {
      console.log("json has no value")
    }
  }, []);

  const [todos, setTodos] = useState([])
  const [key, setKey] = useState(0);
  const [mode, setMode] = useState('appLight');

  function addTodo(todo) {
    let newTodo = {
      item: todo,
      checked: false,
      key: key
    };
    setTodos([...todos, newTodo]); //problem must be here
    setKey(key + 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("data added was " + localStorage.getItem('todos'))
  }

  function deleteTodo(todo) {
    let index = todos.indexOf(todo);
    let newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray); 
  }
  return (
    <div className={mode + " appPositioning"}>
      <div className="titleDiv">
        <h1 className="title">TODO</h1>
        <button className="changeDisplayButton" onClick={() => {
          if (mode === "appLight") {
            setMode("appDark")
          } else {
            setMode("appLight");
          }
        }}>Dark Mode</button>
      </div>
      <TodoInput appendFunction={addTodo}/>
      <TodoList todoList={todos} deleteFunction={deleteTodo}/>
      <div className="topBackground"></div>
    </div>
  );
}

export default App;
