require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
//CONNECT TO DB
const connectDB = require('./config/db');
connectDB();
//SIMPLE LOGGER
if(process.env.NODE_ENV === 'dev') {
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.originalUrl} `);
    next();
})
}
app.get('/test',(req,res)=>{
    res.json({msg: 'Hello, World!'});
});
//process is the applictaion 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
