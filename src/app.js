import express from 'express'
import dotenv from "dotenv"
import { mongoose } from 'mongoose';

// Import the Charts of Accounts router
import Accountsrouter from './routers/chartOfAccounts.routers.js';

dotenv.config() // this will read the file and will place the values in the process.env
const port = process.env.PORT
//just for information
console.log("Port:" + port)
//#region  Define a custom middleware
const demoMiddleware = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}
//#endregion

//#region Connect with MongoDB
mongoose.connect("mongodb://localhost:32768/Account-System", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error occured while connecting with the database"))
db.once("open", function(){
    console.log("Succesfully connected with the Mongoose Db")
});
//#endregion


const app = express();
app.use(demoMiddleware);

// Mount the custom route
app.use('/accounts/', Accountsrouter);
app.listen(port,()=>{
    console.log(`Server is listening on Port: ${port}`)
})

