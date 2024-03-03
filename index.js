// const express = require('express');
// const app = express()
// const port =5000;
// const mongoDB = require("./db");
// const { Route } = require('react-router-dom');

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });


// mongoDB();
// app.use(express.json())
// app.use('/api', require("./Routes/CreateUser"));
// app.get('/',(req,res)=>{
//     res.send('Hello world!')
// });

// app.listen(port,()=>{
//     console.log(`Example app is litening on port ${port}`)
// });

const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");
const { Route } = require('react-router-dom');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

mongoDB();
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.get('/',(req,res)=>{
    res.send('Hello world!')
});

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`)
});
