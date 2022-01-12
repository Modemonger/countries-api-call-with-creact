import React from 'react';
import ToDo from './ToDo';
import style from './App.css'

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    if(toDoList)
        return (
            <div className = "todos">
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                })}
                <button onClick={handleFilter}>Clear Completed</button>
            </div>
        );
    else
        return (
            <div className = {style.todos}>
                
            </div>
        );
};

export default ToDoList;