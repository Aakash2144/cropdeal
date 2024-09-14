const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');
const jwt = require('jsonwebtoken');

// Farmer Signup Route
router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const existingFarmer = await Farmer.findOne({ email });
        if (existingFarmer) {
            return res.status(400).json({ message: 'Farmer already exists' });
        }

        const farmer = new Farmer({ fullName, email, password });
        await farmer.save();

        const token = jwt.sign({ id: farmer._id, role: 'farmer' }, 'secret_key', { expiresIn: '1h' });
        res.status(201).json({ token, role: 'farmer' });
    } catch (error) {
        console.error('Farmer Signup Error:', error);
        res.status(500).json({ message: 'Error during farmer signup' });
    }
});

// Farmer Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const farmer = await Farmer.findOne({ email });
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }

        const isMatch = await farmer.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: farmer._id, role: 'farmer' }, 'secret_key', { expiresIn: '1h' });
        res.json({ token, role: 'farmer' });
    } catch (error) {
        console.error('Farmer Login Error:', error);
        res.status(500).json({ message: 'Error during farmer login' });
    }
});

module.exports = router;
