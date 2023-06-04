const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    data: {
type: String,
required: true
    },
    done: {
type: Boolean,
default: false
    },
    createAt: {
type: Date,
default: Date.now
    }
})

const todo = mongoose.model('todo',TodoSchema);

module.exports=todo;