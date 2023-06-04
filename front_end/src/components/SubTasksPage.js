import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubTask } from '../redux/actions';
import { useParams } from 'react-router-dom';

const AddSubTaskPage = () => {
    const [subTaskText, setSubTaskText] = useState('');
    const { taskId } = useParams();
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newSubTask = {
            data: subTaskText,
            parentId: taskId,
            done: false,
        };

        dispatch(addSubTask(taskId, newSubTask));

        setSubTaskText('');
    };

    return (
        <div className="add-subtask-page">
            <h2 className="page-title">Add Sub Task</h2>
            <form onSubmit={handleFormSubmit} className="subtask-form">
                <div className="input-container">
                    <input
                        type="text"
                        value={subTaskText}
                        onChange={(e) => setSubTaskText(e.target.value)}
                        placeholder="Enter sub task"
                        required
                        className="subtask-input"
                    />
                    <button type="submit" className="add-button">
                        <i className="fas fa-plus"></i> Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSubTaskPage;
