import React from "react";

const prioriyList = ["Low", "Mid", "High"];

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <br />
            <input type="text" name="title" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Due date:
            <br />
            <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Details:
            <br />
            <input type="text" name="description" onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Priority:
            <br />
            <select name="priority" onChange={(event) => props.change(event)}>
            <option>Low</option>
            <option>Middle</option>
            <option>High</option>
            </select>
            <br />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;