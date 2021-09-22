import React from "react";
import {
  Button,
  Segment,
  Form,
  Select,
  Header,
  Input,
} from "semantic-ui-react";

const NewTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
  }

  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">New Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Enter Task Name..."
            value={newTask.name}
            onChange={changeNewTask}
            name="name"
          />

          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="Choose Task Color"
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Green", value: "green" },
            ]}
            value={newTask.color}
            onChange={changeNewTask}
            name="color"
          />
          <Button.Group fluid>
            <Button color="red" onClick={closeNewTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" onClick={addNewTask}>
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;
