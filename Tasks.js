import React, { Component } from 'react';
import './Tasks.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';

export default class Tasks extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: ["Walk my dog for 15 minutes", "Buy groceries from Wegmans", "Pick up friend from Greyhound at 5pm"],
            showDialog: false
        };

        this.handleShowDialog = this.handleShowDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleShowDialog() {
        this.setState({ showDialog: true });
    }
    handleAddTask(e) {
        if (this.inputElement.value !== "") {
            var newTaskList = this.state.tasks.slice();
            newTaskList.push(this.inputElement.value)
            this.setState({
                tasks: newTaskList
            });
        }
        this.handleCloseDialog();
        e.preventDefault();

    }
    handleCloseDialog() {
        this.setState(prevState => ({
            showDialog: false
        }));
    }
    showTasks() {
        return <div className="toDoList">
            <ul>
                {
                    this.state.tasks.map((task, index) =>
                        <li key={index}>
                            <Checkbox
                                labelPosition = "left"
                            />
                            {task}
                        </li>)
                }
            </ul>
        </div>
    }

    render() {
        return (
            <div className="tasksContainer">
                <h1> To-Do Tasks </h1>
                <div className="createTask">
                    {this.showTasks()}
                    <Button variant="raised" color="primary" onClick={this.handleShowDialog}>
                        Add Task
                    </Button>
                    <form onSubmit={this.handleAddTask}>
                        <Dialog
                            open={this.state.showDialog}
                            onClose={this.handleCloseDialog}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Enter New Task</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    inputRef={(a) => this.inputElement = a}
                                    id="name"
                                    label="To-Do"
                                    type="text"
                                    style={{ width: 400 }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button type="submit" onClick={this.handleAddTask} color="primary">
                                    Add
                            </Button>
                                <Button onClick={this.handleCloseDialog} color="primary">
                                    Cancel
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </form>
                </div>

            </div>
        );
    }
}