import React from 'react';
import InputSection from '../containers/inputToDo.jsx'
import ToDoList from '../containers/todoList.jsx';

const App = () => (
    <div className="container">
        <InputSection />
        <ToDoList />
    </div>
);

export default App;