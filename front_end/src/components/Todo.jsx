import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo, addSubTask } from "../redux/actions";
import moment from "moment";
import "moment/locale/ar";

const Todo = ({ todo, date }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);
    const [showSubTaskForm, setShowSubTaskForm] = useState(false);
    const [subTaskText, setSubTaskText] = useState("");
    const [todoDate, setTodoDate] = useState(date);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(false);

        dispatch(updateTodo(todo._id, text, todoDate));
    };

    const onSubTaskFormSubmit = (e) => {
        e.preventDefault();

        const newSubTask = {
            data: subTaskText,
            parentId: todo?._id,
            done: false,
        };

        dispatch(addSubTask(todo?._id, newSubTask));

        setSubTaskText("");
        setShowSubTaskForm(false);
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo._id));
    };

    const taskClassName = todo?.done ? "task completed" : "task";

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        e.target.closest(".task").classList.add("deleted");
    };

    const formattedDate = moment(todoDate).locale("ar").format("DD/MM/YYYY");

    return (
        <li
            className={taskClassName}
            onClick={() => dispatch(toggleTodo(todo._id))}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? "none" : "inline" }}>{todo?.data}</span>
            <span style={{ display: editing ? "none" : "inline" }}>Date: {formattedDate}</span>
            <form style={{ display: editing ? "inline" : "none" }} onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="date"
                    value={todoDate}
                    onChange={(e) => setTodoDate(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>

            <span className="icon" onClick={handleDeleteClick}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing((prevState) => !prevState)}>
                <i className="fas fa-pen" />
            </span>

            {todo?.done && <span className="completed-mark">&#10003;</span>}

            <button onClick={() => setShowSubTaskForm(true)}>Add Subtask</button>

            {showSubTaskForm && (
                <form onSubmit={onSubTaskFormSubmit}>
                    <input
                        type="text"
                        value={subTaskText}
                        onChange={(e) => setSubTaskText(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            )}
        </li>
    );
};

export default Todo;

