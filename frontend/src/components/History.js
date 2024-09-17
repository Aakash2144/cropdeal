import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import { useTranslation } from 'react-i18next';
//import './History.css'; // CSS for styling the page

const History = () => {
    const { t } = useTranslation();
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
        return <p>{t('Loading_History')}</p>;
    }

    return (
        <div className="history-container">
            <h2>{t('Crop History')}</h2>
            <ul>
                {cropHistory.length > 0 ? (
                    cropHistory.map((crop) => (
                        <li key={crop.id}>
                            <strong>{crop.name}</strong> - {t('Planted On')}: {new Date(crop.plantedDate).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <p>{t('No Crop History')}</p>
                )}
            </ul>

            <h2>{t('Order History')}</h2>
            <ul>
                {orderHistory.length > 0 ? (
                    orderHistory.map((order) => (
                        <li key={order.id}>
                            <strong>{t('Order ID')}:</strong> {order.id} - {t('Status')}: {order.status} - {t('Total')}: {order.total} - {t('Date')}: {new Date(order.date).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <p>{t('No Order History')}</p>
                )}
            </ul>
        </div>
    );
};

export default History;
