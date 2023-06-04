const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

 const Connection = () => {

    mongoose.connect(
      "mongodb+srv://malak:123@mern-todolist.rzjj3es.mongodb.net/",
      { useNewUrlParser: true }
    );
    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })
}
module.exports = Connection;
