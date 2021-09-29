import React from "react";
import { Button, Grid, List, Label } from "semantic-ui-react";

const Task = ({ name, color, editTask, index, deleteTask }) => {
  function editCurrentTask() {
    editTask(index);
  }

  function deleteCurrentTask() {
    deleteTask(index);
  }

  console.log(name, color);
  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            <Label size="big" color={color}>
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              icon="trash"
              color="red"
              onClick={deleteCurrentTask}
            ></Button>
            <Button
              icon="pencil"
              color="orange"
              onClick={editCurrentTask}
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
