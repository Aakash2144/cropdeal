import React, { useState } from 'react';
import axios from 'axios'; 
import './ContractForm.css';
const ContractForm = ({ onClose }) => {
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
            alert('Contract created successfully');
            setContract({ title: '', description: '', terms: '', startDate: '', endDate: '', amount: '' });
            if (onClose) onClose();
        } catch (error) {
            console.error('Error creating contract', error);
            alert('Failed to create contract');
        }
    };

    return (
        <div className="contract-form">
            <h2>Create Contract</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={contract.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={contract.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Terms:
                    <textarea
                        name="terms"
                        value={contract.terms}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="startDate"
                        value={contract.startDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        name="endDate"
                        value={contract.endDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        value={contract.amount}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ContractForm;
