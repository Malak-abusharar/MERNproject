const Todo = require("../model/Todo.js");

const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
      createAt: Date.now(),
    });
    await newTodo.save();
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todos = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await todos.save();
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const updateTodo = async (request, response) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );
    const todo = await Todo.findById(request.params.id);
    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const deleteTodo = async (request, response) => {
  try {
    const todo = await Todo.findOneAndDelete(request.params.id);
    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
};
