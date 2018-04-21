import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getItems, markItemComplete, removeItem } from '../actions/todoActions'

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getItems();
    }
    componentWillReceiveProps(props) {
        if (props.nextItem && props.markCompleteIndex == -1 && props.removeItemIndex == -1) {
            this.props.toDoList.push(props.nextItem)
        }
        if (props.removeItemIndex >= 0) {
            this.props.toDoList.splice(props.removeItemIndex, 1);
        }
        if (props.markCompleteIndex >= 0 && props.removeItemIndex == -1) {
            this.props.toDoList[props.markCompleteIndex].completed = true;
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
        return todoListData.map((item, i) => {
            return (
                <li onClick={(event) => props.props.markItemComplete(i)} id={i}
                    className={item.completed ? "checked" : ""} key={item.id}>{item.task}
                    <span onClick={(event) => {
                        event.stopPropagation();
                        props.props.removeItem(i)
                    }}
                        className="close" >×</span></li>
            );
        });
    }
    return <h3>Add some tasks ... </h3>
}

function mapStateToProps(state) {
    return {
        toDoList: state.todoTasks.items,
        nextItem: state.todoTasks.item,
        markCompleteIndex: state.todoTasks.markCompleteIndex,
        removeItemIndex: state.todoTasks.removeItemIndex
    }
}

export default connect(mapStateToProps, { getItems, markItemComplete, removeItem })(ToDoList);