// contract.controller.js
import express from 'express';
import Contract from '../models/contract.js';

const router = express.Router();

// Create a new contract
router.post('/', async (req, res) => {
  try {
    const contract = new Contract(req.body);
    await contract.save();
    res.status(201).send(contract);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all contracts
router.get('/', async (req, res) => {
  try {
    const contracts = await Contract.find().exec();
    res.send(contracts);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a single contract
router.get('/:id', async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id).exec();
    if (!contract) {
      res.status(404).send({ message: 'Contract not found' });
    } else {
      res.send(contract);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a contract
router.patch('/:id', async (req, res) => {
  try {
    const contract = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.send(contract);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a contract
router.delete('/:id', async (req, res) => {
  try {
    await Contract.findByIdAndRemove(req.params.id).exec();
    res.status(204).send({ message: 'Contract deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;