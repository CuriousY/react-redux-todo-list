import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getItems, markItemComplete } from '../actions/todoActions'

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getItems();
    }
    componentWillReceiveProps(props) {
        if (props.nextItem && props.markCompleteIndex == -1) {
            this.props.toDoList.push(props.nextItem)
        }
        else {
            this.props.toDoList[props.markCompleteIndex - 1].completed = true;
        }

    }
    render() {
        return (
            <div className="todoList">
                <ul id="myUL">
                    <ListItems props={this.props} />
                </ul>
            </div>
        );
    }
}

const ListItems = (props) => {
    let todoListData = props.props.toDoList;
    if (todoListData) {
        return todoListData.map((item) => {
            return (
                <li onClick={() => props.props.markItemComplete(item.id)} id={item.id}
                    className={item.completed ? "checked" : ""} key={item.id}>{item.task}
                    <span className="close">×</span></li>
            );
        });
    }
    return <h3>Add some tasks ... </h3>
}

function mapStateToProps(state) {
    return {
        toDoList: state.todoTasks.items,
        nextItem: state.todoTasks.item,
        markCompleteIndex: state.todoTasks.markCompleteIndex
    }
}

export default connect(mapStateToProps, { getItems, markItemComplete })(ToDoList);