const express = require('express');
const connection = require('./connection');
const userRoutes = require('./routes/userRoutes');
const app = express();
connection();
app.use(express.json());

app.use(express.static('public'))

app.use('/api',userRoutes);

//localhost:4500/api/register


app.listen(4500,(error)=>{
    if(error){
        console.log("error occor",error);
    }
    else{
        console.log("server started");
    }
})
