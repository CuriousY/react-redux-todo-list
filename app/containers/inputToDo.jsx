import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from '../actions/todoActions'

class InputSection extends Component {
    constructor(props) {
        super(props);
        this.updateTask = this.updateTask.bind(this);
        this.state = {
            task: "",
            completed: false
        };
    }

    updateTask(e) {
        let id = 0;
        let txtValue = this.refs.txtTask.value;
        if (this.props.toDoList) {
            id = this.props.toDoList.length + 1;
        }
        if (txtValue) {
            let task = {
                id: id,
                task: txtValue,
                completed: false
            };
            this.props.addItem(task)
        }
    }

    render() {
        return (
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input type="text" ref="txtTask" name="task" id="myInput" placeholder="Enter your task" />
                <span onClick={this.updateTask} className="addBtn">Add</span>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        toDoList: state.todoTasks.items,
        nextItem: state.todoTasks.item
    }
}

export default connect(mapStateToProps, { addItem })(InputSection);
