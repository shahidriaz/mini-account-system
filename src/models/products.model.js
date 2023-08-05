//File products.model.js
import { mongoose } from 'mongoose';

const productSchema = new mongoose.Schema({
    productName:{type: String, required: true},
    unitPrice:{type: Number, required: true},
    quantityInHand:{type: Number, required: true},
    supplier:{
        supplierId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Supplier',
            required:true
        }
    }
});
export const Product = mongoose.model("Product", productSchema);