const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');

// Vendor Signup Route
router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const existingVendor = await Vendor.findOne({ email });
        if (existingVendor) {
            return res.status(400).json({ message: 'Vendor already exists' });
        }

        const vendor = new Vendor({ fullName, email, password });
        await vendor.save();

        const token = jwt.sign({ id: vendor._id, role: 'vendor' }, 'secret_key', { expiresIn: '1h' });
        res.status(201).json({ token, role: 'vendor' });
    } catch (error) {
        console.error('Vendor Signup Error:', error);
        res.status(500).json({ message: 'Error during vendor signup' });
    }
});

// Vendor Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const vendor = await Vendor.findOne({ email });
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        const isMatch = await vendor.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: vendor._id, role: 'vendor' }, 'secret_key', { expiresIn: '1h' });
        res.json({ token, role: 'vendor' });
    } catch (error) {
        console.error('Vendor Login Error:', error);
        res.status(500).json({ message: 'Error during vendor login' });
    }
});

module.exports = router;
