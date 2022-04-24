import React, { createContext, useEffect, useState } from "react";
import { flattenDiagnosticMessageText } from "typescript";
import { Todo } from "../models/Todo";
import { get, save } from "../services/TodoService";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
    todos:[],
    addTodo:() => { },
    removeTodo: () => { },
    toggle:() => { }
});


const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>(get);
    
    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
       const todo: Todo = {id: todos.length + 1, title: title, done: false}
        setTodos([...todos, todo]);
        save(todos);
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_,i) => i!== index));
        save(todos);
    }
    
    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
        save(todos);
    }

    return(
        <TodoContext.Provider value={{
            todos, addTodo, removeTodo, toggle
         }}>
            {props.children}
        </TodoContext.Provider>
    );
 }

export default TodoProvider;
