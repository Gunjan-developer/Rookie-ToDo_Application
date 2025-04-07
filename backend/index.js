// here creating the basic express boilerplate code , with express.json() middleware 
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()) // helps to read the body content 

app.get('/', function(req, res) {
    res.send("Hi Backend is Ready!!");
});

app.post("/todo" , function(req, res) {

});

app.get("/todos" , function (req, res) {

});

app.put("/completed" , function (req, res) {

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
