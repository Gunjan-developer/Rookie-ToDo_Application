// here creating the basic express boilerplate code , with express.json() middleware 
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const PORT = 3001;



app.use(express.json()) // helps to read the body content 

app.get('/', function(req, res) {
    res.send("Hi Backend is Ready!!");
});

app.post("/todo" , function(req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "Please enter valid credentials"
        })
        return;
    }
});

app.get("/todos" , function (req, res) {

});

app.put("/completed" , function (req, res) {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "Please enter valid credentials"
        })
        return;
    }
})

// error handling middleware 
app.use((err, req, res , next) => {
    res.status(500).json({
        "msg": "Internal server is crashed"
    });
})

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`);
});
