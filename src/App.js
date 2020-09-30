import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <h1>Hello to my todos</h1>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    </div>
  );
}

export default App;
