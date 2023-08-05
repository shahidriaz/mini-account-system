import { chartOfAccounts } from "../models/chartOfAccounts.model.js";
// Method to fetch all records [Documents] from the Chart-Of-Accounts Table [Collection]
const getAll = async (req, res) => {
    const chartsOfAccounts = await chartOfAccounts.find();
    res.json(chartsOfAccounts);
};
//Method to get a chart of account record [Document] from the Chart-Of-Accounts Table [Collection]
const getChartOfAccountsById = async (req, res) => {
    const chartOfAccountId = req.params.id;
    const account = await chartOfAccounts.findById(chartOfAccountId);
    if(!account)
    {
        return res.status(404).json({message: 'Account not exists!'})
    }
    res.json(account);
};
// Method to create a new Chart Of Accounts record [Document] into the Chart-Of-Accounts Table [Collection]
const createChartOfAccount = async (req, res) => {
    const {code, name, type, } = req.body;
    const newAccount = await chartOfAccounts.create({
        code,name,type
    });
    res.status(201).json(newAccount);
};
// Method to update a Chart Of Accounts record [Document] into the Chart-Of-Accounts Table [Collection]
const updateChartOfAccount = async (req, res) => {
    console.log(req.body);
    const chartOfAccountId = req.params.id;
    const {code, name, type, } = req.body;
    console.log(`Record to update against Id is ${chartOfAccountId}`);
    const updatedChartOfAccount = await chartOfAccounts.findByIdAndUpdate(
        chartOfAccountId,
        {
            code,name,type
        },
        {
            new:true
        }
    );
    if(!updatedChartOfAccount)
    {
        return res.status(404).json({message: 'Account not exists!'})
    }
    return res.status(200).json(updatedChartOfAccount);
};
// Method to delete a chart of Account record [Document] from the Chart-Of-Accounts Table [Collection]
const deleteCharOfAccount = async(req,res) =>{
    const chartOfAccountId = req.params.id;
    const deletedChartOfAccount = await chartsOfAccounts.findByIdAndDelete(chartOfAccountId);
    if (!deletedChartOfAccount) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json({ message: 'Account deleted successfully' });
};

// Export the methods
export { getAll, getChartOfAccountsById, createChartOfAccount, updateChartOfAccount,deleteCharOfAccount};
  