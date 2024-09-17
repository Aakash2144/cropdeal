import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './ContractForm.css';

const ContractForm = ({ onClose }) => {
    const { t } = useTranslation();
    const [contract, setContract] = useState({
        title: '',
        description: '',
        terms: '',
        startDate: '',
        endDate: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContract({ ...contract, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace with your API endpoint for creating contracts
            await axios.post('/api/contracts', contract);
            alert(t('Contract_Created_Successfully'));
            setContract({ title: '', description: '', terms: '', startDate: '', endDate: '', amount: '' });
            if (onClose) onClose();
        } catch (error) {
            console.error('Error creating contract', error);
            alert(t('Failed_To_Create_Contract'));
        }
    };

    return (
        <div className="contract-form">
            <h2>{t('Create_Contract')}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    {t('Title')}:
                    <input
                        type="text"
                        name="title"
                        value={contract.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    {t('Description')}:
                    <textarea
                        name="description"
                        value={contract.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    {t('Terms')}:
                    <textarea
                        name="terms"
                        value={contract.terms}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    {t('Start_Date')}:
                    <input
                        type="date"
                        name="startDate"
                        value={contract.startDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    {t('End_Date')}:
                    <input
                        type="date"
                        name="endDate"
                        value={contract.endDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    {t('Amount')}:
                    <input
                        type="number"
                        name="amount"
                        value={contract.amount}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">{t('Submit')}</button>
                <button type="button" onClick={onClose}>{t('Cancel')}</button>
            </form>
        </div>
    );
};

export default ContractForm;
