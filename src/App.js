import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import taskData from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Laura",
      task: taskData
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = id => {
    console.log(id);
    this.setState({
      task: this.state.task.map(task => {
        if (task.id === id) {
          return {
            ...item,
            // Same as:
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
            purchased: !task.purchased
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      task: [...this.state.task, newtask]
    });
  };

  clearPurchased = () => {
    this.setState({
      task: this.state.task.filter(task => !task.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>My Todo List!</h2>
          <TodoForm addItem={this.addTask} />
        </div>
        <TodoList
          taskData={this.state.task}
          toggleItem={this.toggleTask}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
