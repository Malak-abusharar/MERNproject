import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
    const { id: todoId } = useParams();
    const todos = useSelector((state) => state.todos);
    const todo = todos.find((todo) => todo._id === todoId);

    if (!todo) {
        return <div>Todo not found.</div>;
    }

    return (
        <div>
            <h2>{todo.data}</h2>
        </div>
    );
};

export default TodoDetails;
