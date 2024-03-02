const express = require('express');
const app = express()
const port =5000;
const mongoDB = require("./db");
const { Route } = require('react-router-dom');
mongoDB();
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.get('/',(req,res)=>{
    res.send('Hello world!')
});

app.listen(port,()=>{
    console.log(`Example app is litening on port ${port}`)
});

