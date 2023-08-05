import e from "express";
import { Product } from "../models/products.model.js";
const getAll = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const getProductById = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(!product)
    {
        return res.status(404).json({message: 'Product not exists!'})
    }
    res.json(product);
};

const createProduct = async (req, res) => {
    const {productName, unitPrice, quantityInHand,supplierId} = req.body;
    const newProduct = new Product({
        productName,unitPrice,quantityInHand,
        supplier:{
            supplierId
        }
    });
    const savedProduct = await newProduct.save();
    console.log("Product Saved Successfully");
    return res.status(201).json(savedProduct);
};

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const {productName, unitPrice, quantityInHand,supplierId} = req.body;
    const updateProduct = {
        productName,unitPrice,quantityInHand,
        supplier:{
            supplierId
        }
    };
    const updatedProduct = await Product.findOneAndUpdate({_id: productId},updateProduct,{new:true});
    console.log('Product updated successfully:', updatedProduct);
    res.json(updatedProduct);
    
}

const deleteProduct = async(req,res) =>{
    const ProductId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(ProductId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product Does not exists' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
};

// Export the methods
export { getAll, getProductById, createProduct, updateProduct,deleteProduct};
  