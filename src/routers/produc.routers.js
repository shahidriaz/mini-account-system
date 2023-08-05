import express from 'express';
import { getAll, getProductById, createProduct, updateProduct,deleteProduct } from '../controllers/product.controller.js';
const Productrouter = express.Router();
// Middleware to parse JSON data in the request body
Productrouter.use(express.json());
// Define Get For Product. This router will co-ordinate with the controller 
Productrouter.get('/',getAll);
// This is also a get method. It accepts the id and return Product based on id 
Productrouter.get('/:id', getProductById)
// Define Post For Product. This router will co-ordinate with the controller to 
// create a new record in Product
Productrouter.post('/', createProduct);
// Define Put For Product. This router will co-ordinate with the controller to 
// update an existing record in Product
Productrouter.put('/:id', updateProduct);
//Define the delete endpoint to delete a record from Product
Productrouter.delete('/:id',deleteProduct);
export default Productrouter;
