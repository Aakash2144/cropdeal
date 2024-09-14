const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vendorRoutes = require('./routes/vendorRoutes');
const farmerRoutes = require('./routes/farmerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/cropdeal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/vendor', vendorRoutes);
app.use('/api/farmer', farmerRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
