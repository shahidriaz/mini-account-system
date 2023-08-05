import express from 'express'
import dotenv from "dotenv"
import { mongoose } from 'mongoose';

// Import the Charts of Accounts router
import Accountsrouter from './routers/chartOfAccounts.routers.js';
// Import the Customer router
import CustomerRouter from './routers/customer.routers.js';
// Import the Supplier router
import SupplierRouter from './routers/supplier.routers.js';
// Import the Product
import Productrouter from './routers/produc.routers.js';

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
mongoose.connect("mongodb://localhost:27017/Account-System", {
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
// Mount the route for Charts of Accounts
app.use('/accounts/', Accountsrouter);

// Mount the route for Customer
app.use('/customer/', CustomerRouter);

// Mount the route for Supplier
app.use('/supplier/', SupplierRouter);
// Mount the route for Product
app.use('/product/', Productrouter);


app.listen(port,()=>{
    console.log(`Server is listening on Port: ${port}`)
})

