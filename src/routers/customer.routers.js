import express from 'express';
import { getAll, getCustomerById, createCustomer, updateCustomer,deleteCustomer } from '../controllers/customer.controller.js';
const Customerrouter = express.Router();
// Middleware to parse JSON data in the request body
Customerrouter.use(express.json());
// Define Get For Customer. This router will co-ordinate with the controller 
Customerrouter.get('/',getAll);
// This is also a get method. It accepts the id and return Customer based on id 
Customerrouter.get('/:id', getCustomerById)
// Define Post For Customer. This router will co-ordinate with the controller to create a new record in Customer
Customerrouter.post('/', createCustomer);
// Define Put For Customer. This router will co-ordinate with the controller to update an existing record in Customer
Customerrouter.put('/:id', updateCustomer);
//Define the delete endpoint to delete a record from Customer
Customerrouter.delete('/:id',deleteCustomer);
export default Customerrouter;
