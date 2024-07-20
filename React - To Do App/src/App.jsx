import { useState, useEffect, useRef } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("todos"));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   let todoString = localStorage.getItem("todos");
  //   if (todoString) {
  //     let todos = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.getItem("todos") &&
  //     setTodos(JSON.parse(localStorage.getItem("todos")));
  // }, []);

  // const save_to_local_storage = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //   // save_to_local_storage();
  // }, [todos]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const buttonRef = useRef();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buttonRef.current.click();
    }
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleCheckbox = (e) => {
    todos.filter((todo) => {
      if (todo.id === e.target.name) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos([...todos]);
  };

  const inputRef = useRef();
  const handleEdit = (e) => {
    let newTodos = todos.filter((todo) => {
      if (todo.id === e.target.name) {
        setTodo(todo.todo);
        return;
      }
      return todo;
    });
    setTodos([...newTodos]);
    inputRef.current.focus();
  };

  const handleDelete = (e) => {
    let newTodos = todos.filter((todo) => {
      if (todo.id === e.target.name) {
        return;
      }
      return todo;
    });
    setTodos([...newTodos]);
  };

  return (
    <>
      <div className="flex justify-center my-32">
        <div className="todo-container bg-purple-100 px-20 py-10 rounded-md">
          <h1 className="text-center font-bold text-4xl mb-10">Todo List</h1>
          <div className="ip-container flex justify-center items-center mb-5">
            <input
              type="text"
              ref={inputRef}
              onChange={handleChange}
              value={todo}
              onKeyDown={handleKeyDown}
              className="h-8 w-[15vw] rounded-md px-3"
              placeholder="Enter Todo"
            />
            <button
              ref={buttonRef}
              disabled={todo.length === 0}
              onClick={handleAdd}
              className="btn disabled:cursor-not-allowed disabled:bg-violet-800"
            >
              Add
            </button>
          </div>
          <ul className="todos">
            {todos.map((item) => (
              <li key={item.id} className="todo">
                <div
                  className={
                    "cursor-pointer" + (item.isCompleted ? " line-through" : "")
                  }
                >
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name={item.id}
                    className="mr-3 relative top-0.5"
                    checked={item.isCompleted}
                  />
                  {item.todo}
                </div>
                <div className="buttons">
                  <button onClick={handleEdit} name={item.id} className="btn">
                    Edit
                  </button>
                  <button onClick={handleDelete} name={item.id} className="btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
