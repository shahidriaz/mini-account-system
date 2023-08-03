//File customer.model.js
import { mongoose } from 'mongoose';

const customerSchema = new mongoose.Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: false},
    email:{type: String, required: false},
    addressLine1:{type: String, required: false},
    addressLine2:{type: String, required: false},
    postalCode:{type: String, required: false}
});

export const Customer = mongoose.model("Customer", customerSchema);