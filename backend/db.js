// this is where we are using the things:
require('dotenv').config();
const mongoose = require("mongoose");

let databaseConnection = process.env.DATABASE_URL;

mongoose.connect(databaseConnection);

const todoSchema = mongoose.Schema({
    title: String ,
    description: String ,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}