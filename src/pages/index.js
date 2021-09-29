import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Container,
  Header,
  Button,
  Grid,
  List,
  Rating,
  Segment,
  Popup,
} from "semantic-ui-react";
import Task from "../components/Task.js";
import NewTaskForm from "../components/NewTaskForm.js";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(false);

  const [newTask, setNewTask] = React.useState(initialNewTask);

  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  // const taskList = [];
  // list.forEach((task, index) => {
  //   taskList.push(<Task key={`${task.name}-${index}`}name={task.name} color={task.color}></Task>);
  // });

  function editTask(index) {
    // console.log("edit", index);
    const newList = list.map((task, i) => {
      if (i !== index) {
        return task;
      }
      return {
        name: `Edit ${task.onClick}`,
        color: task.color,
      };
    });

    setList(newList);
  }

  function deleteTask(index) {
    //array.filter
    const newList = list.filter((task, i) => {
      if (i == index) {
        return task;
      }
    });
    console.log("Delete");

    setList(newList);
  }

  const taskList = list.map((task, index) => {
    return (
      <Popup
        trigger={
          <Segment>
            <Task
              key={`${task.name}-${index}`}
              name={task.name}
              color={task.color}
              editTask={editTask}
              deleteTask={deleteTask}
              index={index}
            ></Task>
            <Rating icon="star" defaultRating={3} maxRating={4} clearable />
          </Segment>
        }
      >
        <Popup.Header>Task Importance</Popup.Header>
        <Popup.Content>
          <Rating icon="star" defaultRating={3} maxRating={4} />
        </Popup.Content>
      </Popup>
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8" textAlign="center">
            <Header as="h1">Todo List</Header>
          </Grid.Column>
          <Grid.Column width="4" textAlign="right">
            <Button icon="plus" color="green" onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>

        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          />
        ) : null}

        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
