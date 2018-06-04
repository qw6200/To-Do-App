import React from 'react';
import './ToDoTasks.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';

export default class ToDoTasks extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: ["Walk my dog for 15 minutes", "Buy groceries from Wegmans", "Pick up friend from Greyhound at 5pm", "Do laundry", "Go to the gym", "Get a haircut"],
            showDialog: false
        };

        this.handleShowDialog = this.handleShowDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
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
    handleRemoveTask(i) {
        let tasks = [...this.state.tasks];
        tasks.splice(i, 1);
        this.setState({
            tasks: tasks
        });
    }
    handleChecked(i, event){
        this.props.doneTasks(this.state.tasks[i]);
        this.handleRemoveTask(i);
    }
    showTasks() {
        return <div className="toDoList">
            <ul>
                {
                    this.state.tasks.map((task, index) =>
                        <li key={index}>
                            <Checkbox
                                onChange = {this.handleChecked.bind(this, index)}
                                label="Task CheckBox"
                                color="primary"
                                labelposition="left"
                                checked = {false}
                            />
                            {task}
                            <a><Icon style={{ fontSize: "35px", float: "right", padding: "5px" }} onClick={this.handleRemoveTask}>delete_forever</Icon></a>
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