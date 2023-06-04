import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import Statistics from './Statistics'; 


const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="todo-form-container">
            <form className="form" onSubmit={onFormSubmit}>
                <input
                    placeholder="Enter new todo"
                    className="input"
                    onChange={onInputChange}
                    value={text}
                />
                {/* <button type="submit" className="button"> + </button> */}
            </form>
            <div className="statistics-container">
                <Statistics />
            </div>
        </div>
    );
}

export default TodoForm;