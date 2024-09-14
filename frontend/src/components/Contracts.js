import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContractForm from './ContractForm';

const Contracts = () => {
    const [contracts, setContracts] = useState([]);
    const [selectedContract, setSelectedContract] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios.get('/api/contracts')
            .then(response => setContracts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleEdit = (contract) => {
        setSelectedContract(contract);
        setShowForm(true);
    };

    const handleDelete = (contractId) => {
        axios.delete(`/api/contracts/${contractId}`)
            .then(() => {
                setContracts(contracts.filter(c => c.id !== contractId));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Contracts</h1>
            <button onClick={() => { setSelectedContract(null); setShowForm(true); }}>Add Contract</button>
            <ul>
                {contracts.map(contract => (
                    <li key={contract.id}>
                        <h2>{contract.title}</h2>
                        <p>{contract.description}</p>
                        <button onClick={() => handleEdit(contract)}>Edit</button>
                        <button onClick={() => handleDelete(contract.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {showForm && (
                <ContractForm
                    contractId={selectedContract ? selectedContract.id : null}
                    onClose={() => { setShowForm(false); setSelectedContract(null); }}
                />
            )}
        </div>
    );
};

export default Contracts;
