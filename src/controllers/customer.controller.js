import { Customer } from "../models/customer.model.js";
// Method to fetch all records [Documents] from the 
// Customer Table [Collection]
const getAll = async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
};
//Method to get a single customer [Document] from the customer Table [Collection]
const getCustomerById = async (req, res) => {
    const customerId = req.params.id;
    const customer = await Customer.findById(customerId);
    if(!customer)
    {
        return res.status(404).json({message: 'Customer not exists!'})
    }
    res.json(customer);
};
// Method to create a new Customer [Document] into the Customer Table [Collection]
const createCustomer = async (req, res) => {
    const {firstName, lastName, email,addressLine1, addressLine2,postalCode } = req.body;
    const newCustomer = await Customer.create({
        firstName,lastName,email,addressLine1,addressLine2,postalCode
    });
    res.status(201).json(newCustomer);
};
// Method to update a Customer record [Document] into Customer Table [Collection]
const updateCustomer = async (req, res) => {
    const customerId = req.params.id;
    const {firstName, lastName, email,addressLine1, addressLine2,postalCode} = req.body;
    console.log(`Record to update against Id is ${customerId}`);
    const updatedCustomer = await Customer.findByIdAndUpdate(
        customerId,
        {
            firstName,lastName,email,addressLine1,addressLine2,postalCode
        },
        {
            new:true
        }
    );
    if(!updatedCustomer)
    {
        return res.status(404).json({message: 'Customer does not exist!'})
    }
    return res.status(200).json(updatedCustomer);
};
// Method to delete a chart of Account record [Document] from the Chart-Of-Accounts Table [Collection]
const deleteCustomer = async(req,res) =>{
    const customerId = req.params.id;
    console.log(req)
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer Does not exists' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
};

// Export the methods
export { getAll, getCustomerById, createCustomer, updateCustomer,deleteCustomer};
  