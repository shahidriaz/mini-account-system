//File chartOfAccounts.model.js
import { mongoose } from 'mongoose';

const chartOfAccountsSchema = new mongoose.Schema({
    code:{type: String, required: true},
    name:{type: String, required: true},
    type:{type: String, required: true,
    enum:['Asset','Revenue','Liability','Expense','Equity']},
});

export const chartOfAccounts = mongoose.model("ChartsOfAccounts", chartOfAccountsSchema);