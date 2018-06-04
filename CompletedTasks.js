import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import './CompletedTasks.css';

export default class CompletedTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completedTasks: this.props.completeTasks
        }
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
    }
    showTasks() {
        return <div className="toDoList">
            <ul>
                {
                    this.state.completedTasks.map((completedTasks, index) =>
                        <li key={index}>
                            <Checkbox
                                checked="true"
                                label="Task CheckBox"
                                color="primary"
                                labelposition="left"
                            />
                            {completedTasks}
                            <a><Icon style={{ fontSize: "35px", float: "right", padding: "5px" }} onClick={this.handleRemoveTask}>delete_forever</Icon></a>
                        </li>)
                }
            </ul>
        </div>

    }
    handleRemoveTask(i) {
        let compTasks = [...this.state.completedTasks];
        compTasks.splice(i, 1);
        this.setState({
            completedTasks: compTasks 
        });
    }
    render() {
        return <div className="completedContainer">
            <h1> Completed Tasks </h1>
            {this.showTasks()}
        </div>
    }
}