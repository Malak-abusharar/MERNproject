import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getAllTodos, sortTodos } from '../redux/actions';
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from '../redux/actions/type';
import Todo from './Todo';
import Tabs from './Tabs';

const Todos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    const todos = useSelector((state) => state.todos);
    const currentTab = useSelector((state) => state.currentTab);

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter((todo) => !todo.done);
        } else if (currentTab === DONE_TODOS) {
            return todos.filter((todo) => todo.done);
        }
    };

    const handleDeleteDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        });
    };

    const handleSortChange = (e) => {
        const sortType = e.target.value;
        dispatch(sortTodos(sortType));
    };

    return (
        <div className="todos-container">
            <div className="header">
                <h2 className="todos-title">Todo List</h2>
                <Tabs currentTab={currentTab} />
            </div>

            <div className="sort-container">
                <label htmlFor="sort-select">Sort by: </label>
                <select id="sort-select" className="sort-select" onChange={handleSortChange}>
                    <option value="">Default</option>
                    <option value="userOrder">User Order</option>
                    <option value="addDate">Add Date</option>
                    <option value="completeDate">Complete Date</option>
                </select>
            </div>

            <ul className="todo-list">
                {getTodos().length > 0 ? (
                    getTodos().map((todo) => <Todo key={todo._id} todo={todo} date={todo.date} />)
                ) : (
                    <li className="empty-message">No todos found.</li>
                )}
            </ul>

            {currentTab === DONE_TODOS && todos.some((todo) => todo.done) && (
                <button onClick={handleDeleteDoneTodos} className="button clear">
                    Remove Done Todos
                </button>
            )}
        </div>
    );
};

export default Todos;

