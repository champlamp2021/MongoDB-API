const express = require('express');
const app=express();
const mongoose = require('mongoose'); //เชื่อมต่อไปยังฐานข้อมูล .env
const bodyParser = require('body-parser');
const cors=require('cors');
require('dotenv/config')

app.use(cors());
//run bodyParser เพื่อดึงข้อมูลมาใช้จาก postman
app.use(bodyParser.json());

//import Routes r2
const postsRoute=require('./routes/posts');


//middleware ดูข้อมูล terminal r3
app.use('/posts',postsRoute);  // user เรียก file ที่ path /route/pasts


//Routes
app.get('/',(req, res) => {
    res.send('Welcome Archamplamp');
});

//connect to Database
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true},()=> {

    console.log('Connect to Mongo-DataBase...');
    console.log("======================================");
}
    );

//how to we start listening to the server
app.listen(3000);
