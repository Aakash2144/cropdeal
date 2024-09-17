import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './FarmerHome.css'; // CSS for styling the page

const FarmerHome = () => {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1>{t('Welcome to Your Dashboard')}</h1>
                <p>{t('Manage your crops')}</p>
            </div>

            <div className="overview-section">
                <div className="overview-card">
                    <h2>{t('Your Crops')}</h2>
                    <p>{t('Add manage view crops')}</p>
                    <Link to="/farmer-dashboard/add-crop" className="overview-link">{t('Add Crop')}</Link>
                </div>

                <div className="overview-card">
                    <h2>{t('Your Orders')}</h2>
                    <p>{t('Check manage orders')}</p>
                    <Link to="/farmer-dashboard/orders" className="overview-link">{t('View Orders')}</Link>
                </div>

                <div className="overview-card">
                    <h2>{t('Order History')}</h2>
                    <p>{t('View order history')}</p>
                    <Link to="/farmer-dashboard/history" className="overview-link">{t('View History')}</Link>
                </div>
            </div>
        </div>
    );
};

export default FarmerHome;
