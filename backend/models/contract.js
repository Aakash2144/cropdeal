import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
  contractId: {
    type: String,
    required: true,
  },
  farmerId: {
    type: String,
    required: true,
  },
  vendorId: {
    type: String,
    required: true,
  },
  cropType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  contractStatus: {
    type: String,
    required: true,
    enum: ['pending', 'active', 'completed', 'cancelled'],
  },
});

const Contract = mongoose.model('Contract', contractSchema);

export default Contract;