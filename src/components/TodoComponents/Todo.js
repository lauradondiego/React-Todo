import React from "react";

const Task = props => {
  return (
    <div
      className={`item${props.task.purchased ? " purchased" : ""}`}
      onClick={() => props.toggleItem(props.task.id)}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Task;
