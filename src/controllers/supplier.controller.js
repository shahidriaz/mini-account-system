import { Supplier } from "../models/supplier.model.js";
// Method to fetch all records [Documents] from the 
// Supplier Table [Collection]
const getAll = async (req, res) => {
    const suppliers = await Supplier.find();
    res.json(suppliers);
};
//Method to get a single Supplier [Document] from the Supplier Table [Collection]
const getSupplierById = async (req, res) => {
    const supplierId = req.params.id;
    const supplier = await Supplier.findById(supplierId);
    if(!supplier)
    {
        return res.status(404).json({message: 'Supplier not exists!'})
    }
    res.json(supplier);
};
// Method to create a new Supplier [Document] into the Supplier Table [Collection]
const createSupplier = async (req, res) => {
    const {firstName, lastName, email,addressLine1, addressLine2,postalCode } = req.body;
    const newSupplier = await Supplier.create({
        firstName,lastName,email,addressLine1,addressLine2,postalCode
    });
    res.status(201).json(newSupplier);
};
// Method to update a Supplier record [Document] into Supplier Table [Collection]
const updateSupplier = async (req, res) => {
    const supplierId = req.params.id;
    const {firstName, lastName, email,addressLine1, addressLine2,postalCode} = req.body;
    console.log(`Record to update against Id is ${supplierId}`);
    const updatedSupplier = await Supplier.findByIdAndUpdate(
        supplierId,
        {
            firstName,lastName,email,addressLine1,addressLine2,postalCode
        },
        {
            new:true
        }
    );
    if(!updatedSupplier)
    {
        return res.status(404).json({message: 'Supplier does not exist!'})
    }
    return res.status(200).json(updatedSupplier);
};
// Method to delete a Supplier record [Document] from the Supplier Table [Collection]
const deleteSupplier = async(req,res) =>{
    const supplierId  = req.params.id;
    
    const deletedSupplier = await Supplier.findByIdAndDelete(supplierId);
    if (!deletedSupplier) {
      return res.status(404).json({ message: 'Supplier Does not exists' });
    }
    res.status(200).json({ message: 'Supplier deleted successfully' });
};

// Export the methods
export { getAll, getSupplierById, createSupplier, updateSupplier,deleteSupplier};
  