import React, { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todos: "simple msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComlete: (id) => { },
})

export const ToDoContextProvider = ToDoContext.Provider;

export const  useToDo = ()=>{
    return useContext(ToDoContext)
}