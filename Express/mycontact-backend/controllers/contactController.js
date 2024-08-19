const asyncHandler = require("express-async-handler");

// @desc Get all Contacts
// @route Get / api/contacts
// @access public
const getContacts = async (req, res) => {
    res.status(200).json({message: "Get all my contacts"});
}

// @desc Create Contacts
// @route Post / api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All Fields are mendatory!");
    }
    res.status(201).json({message: "Create Contacts"});
})

// @desc Get Contacts
// @route Get / api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get Contacts ${req.params.id}` });
})

// @desc Update Contacts
// @route Put / api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Contacts ${req.params.id}` });
})

// @desc Delete Contacts
// @route Delete / api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Contacts ${req.params.id}` });
})


module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
}