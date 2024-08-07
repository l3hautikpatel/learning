import { useState  ,useEffect} from "react";
import "./App.css";
import { ToDoContextProvider } from "./context";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((elem) => (elem.id === id ? todo : elem)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((elem) => elem.id !== id));
  };

  const toggleComlete = (id) => {
    setTodos((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : elem
      )
    );
  };


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  

  return (
    <ToDoContextProvider
      value={{ todos, addTodo, toggleComlete, deleteTodo, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><ToDoForm /></div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((e)=>(
                <div key={e.id} className="w-full" >
                  <ToDoItem todo={e} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
