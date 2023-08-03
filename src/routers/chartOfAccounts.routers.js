import express from 'express';
import { getAll, getChartOfAccountsById, createChartOfAccount, updateChartOfAccount,deleteCharOfAccount } from '../controllers/chartOfAccounts.controller.js';
const Accountsrouter = express.Router();
// Middleware to parse JSON data in the request body
Accountsrouter.use(express.json());
// Define Get For Chart of Accounts. This router will co-ordinate with the controller 
Accountsrouter.get('/',getAll);
// This is also a get method. It accepts the id and return chart of account based on id 
Accountsrouter.get('/:id', getChartOfAccountsById)
// Define Post For Charts of Accounts. This router will co-ordinate with the controller to create a new record in Chart of Accounts
Accountsrouter.post('/', createChartOfAccount);
// Define Put For Chart of Accounts. This router will co-ordinate with the controller to update an existing record in Chart of Accounts
Accountsrouter.put('/:id', updateChartOfAccount);
//Define the delete endpoint to delete a record from chart of Accounts
Accountsrouter.delete('/:id',deleteCharOfAccount);
export default Accountsrouter;
