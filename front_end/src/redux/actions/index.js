import axios from "axios";

const {
    ADDNEW_TODO,
    GETALL_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    TOGGLE_TAB,
} = require("./type");

const API_URL = "http://localhost:8000";

export const addNewTodo = (data, date) => async (dispatch) => {
    console.log(data);
    try {
        const res = await axios.post(
            `${API_URL}/todos`,
            { data, date },
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling addNewTodo API ", error.message);
    }
};

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling getAllTodos API ", error.message);
    }
};

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling toggleTodo API ", error.message);
    }
};

export const updateTodo = (id, data, date) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data, date });

        dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling updateTodo API ", error.message);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling deleteTodo API ", error.message);
    }
};

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab });
};

export const addSubTask = (parentId, data) => async (dispatch) => {
    console.log(data);
    try {
        const res = await axios.post(
            `${API_URL}/todos`,
            { data: { ...data, parentId } },
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling addSubTask API ", error.message);
    }
};

export const sortTodos = (sortType) => {
    return { type: sortType };
};
