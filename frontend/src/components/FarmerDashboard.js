import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FarmerHome from './FarmerHome';
import AddCrop from './AddCrop';
import Orders from './Orders';
import Profile from './Profile';
import History from './History'; 
import ContractForm from './ContractForm'; 
import { useTranslation } from 'react-i18next';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
    const { t, i18n } = useTranslation();

       const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <nav className="farmer-nav">
                <ul>
                    <li><Link to="/farmer-dashboard">{t('Home')}</Link></li>
                    <li><Link to="/farmer-dashboard/add-crop">{t('Add_crop')}</Link></li>
                    <li><Link to="/farmer-dashboard/orders">{t('orders')}</Link></li>
                    <li><Link to="/farmer-dashboard/history">{t('history')}</Link></li>
                    <li><Link to="/farmer-dashboard/profile">{t('profile')}</Link></li>
                    <li><Link to="/farmer-dashboard/contract-form">{t('Create_contract')}</Link></li> {/* New Link */}
                </ul>

                {/* Language selector */}
                <div className="language-selector">
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                    <button onClick={() => changeLanguage('te')}>తెలుగు</button>
                </div>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<FarmerHome />} />
                    <Route path="/add-crop" element={<AddCrop />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contract-form" element={<ContractForm />} /> {/* New Route */}
                </Routes>
            </main>
        </div>
    );
};

export default FarmerDashboard;
