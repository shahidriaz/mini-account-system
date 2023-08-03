import express from 'express';
import { getAll, getSupplierById, createSupplier, updateSupplier,deleteSupplier } from '../controllers/supplier.controller.js';
const Supplierrouter = express.Router();
// Middleware to parse JSON data in the request body
Supplierrouter.use(express.json());
// Define Get For Supplier. This router will co-ordinate with the controller 
Supplierrouter.get('/',getAll);
// This is also a get method. It accepts the id and return Supplier based on id 
Supplierrouter.get('/:id', getSupplierById)
// Define Post For Supplier. This router will co-ordinate with the controller to 
// create a new record in Supplier
Supplierrouter.post('/', createSupplier);
// Define Put For Supplier. This router will co-ordinate with the controller to 
// update an existing record in Supplier
Supplierrouter.put('/:id', updateSupplier);
//Define the delete endpoint to delete a record from Supplier
Supplierrouter.delete('/:id',deleteSupplier);
export default Supplierrouter;
