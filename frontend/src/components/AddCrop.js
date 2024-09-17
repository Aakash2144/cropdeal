import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AddCrop.css';

const AddCrop = () => {
    const { t } = useTranslation();
    const [cropName, setCropName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic (e.g., call an API to save crop data)
        alert(`${t('Crop Added')}: ${cropName}, ${t('Quantity')}: ${quantity}, ${t('Price')}: ${price}`);
    };

    return (
        <div className="add-crop-container">
            <h2>{t('Add New Crop')}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    placeholder={t('Crop Name')}
                    className="input-field"
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder={t('Quantity')}
                    className="input-field"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder={t('Price')}
                    className="input-field"
                />
                <button type="submit" className="submit-button">{t('Add Crop')}</button>
            </form>
        </div>
    );
};

export default AddCrop;
