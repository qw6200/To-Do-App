import React from 'react';
import './TopBar.css';

export default class TopBar extends React.Component {
    constructor() {
        super();

        this.handleShowIncomp = this.handleShowIncomp.bind(this);
        this.handleShowComp = this.handleShowComp.bind(this);
    }
    render() {
        return (
            <div className="TopNav" id="myTopnav">
                <a className="token-name" href="/">To-Do App</a>
                <div className="TaskTabs">
                    <a href="/" onClick = {this.handleShowIncomp}>Incomplete Tasks</a>
                    <a href="/" onClick = {this.handleShowComp}>Completed Tasks</a>
                </div>
            </div>
        );
    }
    handleShowComp(e){
        e.preventDefault();
        this.props.handleClick(false)
    }
    handleShowIncomp(e){
        e.preventDefault();
        this.props.handleClick(true)
    }
}