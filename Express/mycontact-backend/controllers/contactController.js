const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
// @desc Get all Contacts
// @route Get / api/contacts
// @access public
const getContacts = async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
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

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact); 
})

// @desc Get Contacts
// @route Get / api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);  
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