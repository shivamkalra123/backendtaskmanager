const { default: mongoose } = require("mongoose")

const URL = "mongodb+srv://admin:admin@cluster0.jdzfnt4.mongodb.net/taskBackend?retryWrites=true&w=majority"
const connection = ()=>{
    mongoose.connect(URL).then(()=>{
        console.log("Database Connected Successfully");
    }).catch(()=>{
        console.log("Database Not Connected");
    })
}

module.exports = connection;