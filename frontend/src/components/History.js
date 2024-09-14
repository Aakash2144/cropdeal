import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const History = () => {
    const [cropHistory, setCropHistory] = useState([]);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch both crop and order history (replace with real API endpoints)
        const fetchHistory = async () => {
            try {
                const cropResponse = await axios.get('http://localhost:5000/api/farmer/crop-history'); // Update with your actual API
                const orderResponse = await axios.get('http://localhost:5000/api/farmer/order-history'); // Update with your actual API

                setCropHistory(cropResponse.data);
                setOrderHistory(orderResponse.data);
            } catch (error) {
                console.error('Error fetching history:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    if (loading) {
        return <p>Loading history...</p>;
    }

    return (
        <div className="history-container">
            <h2>Crop History</h2>
            <ul>
                {cropHistory.length > 0 ? (
                    cropHistory.map((crop) => (
                        <li key={crop.id}>
                            <strong>{crop.name}</strong> - Planted on: {new Date(crop.plantedDate).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <p>No crop history available.</p>
                )}
            </ul>

            <h2>Order History</h2>
            <ul>
                {orderHistory.length > 0 ? (
                    orderHistory.map((order) => (
                        <li key={order.id}>
                            <strong>Order ID:</strong> {order.id} - Status: {order.status} - Total: {order.total} - Date: {new Date(order.date).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <p>No order history available.</p>
                )}
            </ul>
        </div>
    );
};

export default History;
