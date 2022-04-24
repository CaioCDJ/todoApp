import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
   // estraindo os objetos 
    const {todos} = useContext<TodoContextType>(TodoContext);
    
    return(
        <table className="uk-table">
            <caption> Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Terefas</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id } todo={todo}></TodoListItem>)
                    )
                }
            </tbody>
        </table>
    );
}


export default TodoList;