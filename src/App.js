import React from "react";

import "./components/TodoComponents/Todo.css";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoData = [
  {
    name: "Walk Cat",
    id: 1528817077286,
    completed: false
  },
  {
    name: "Eat Burritos",
    id: 1528817084358,
    completed: false
  },
  {
    name: "Netflix",
    id: 1528817084359,
    completed: false
  },
  {
    name: "Max out Credit Card",
    id: 1528817084351,
    completed: false
  },
  {
    name: "Advanced React",
    id: 1528817084352,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // Same as:
            // name: item.name,
            // id: item.id,
            // completed: item.completed,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Laura's To Do List:</h2>
          <TodoForm
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
