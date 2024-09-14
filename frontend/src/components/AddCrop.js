import React, { useState } from 'react';
import './AddCrop.css';

const AddCrop = () => {
    const [cropName, setCropName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic (e.g., call an API to save crop data)
        alert(`Crop Added: ${cropName}, Quantity: ${quantity}, Price: ${price}`);
    };

    return (
        <div className="add-crop-container">
            <h2>Add New Crop</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    placeholder="Crop Name"
                    className="input-field"
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    className="input-field"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    className="input-field"
                />
                <button type="submit" className="submit-button">Add Crop</button>
            </form>
        </div>
    );
};

export default AddCrop;
