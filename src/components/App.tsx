import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoContext  from "../contexts/TodoContext";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () =>{
    return(
        <TodoContext>
            <Router >
                <Navbar />
                <div className="uk-container">
                    <Routes>
                        <Route path="/" element={<TodoList />}/>
                        <Route path="/create" element={<AddTodo />}/>
                    </Routes>
                </div>
            </Router>
        </TodoContext>
    )
}

export default App;