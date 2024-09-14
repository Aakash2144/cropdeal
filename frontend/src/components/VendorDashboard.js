import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VendorHome from './VendorHome';
import Contracts from './Contracts';
import Orders from './Orders';
import Profile from './Profile';
import Contact from './Contact';
import './VendorDashboard.css'; // Import the CSS file

const VendorDashboard = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/vendor-dashboard">{t('welcome')}</Link></li>
                    <li><Link to="/vendor-dashboard/contracts">{t('contracts')}</Link></li>
                    <li><Link to="/vendor-dashboard/orders">{t('orders')}</Link></li>
                    <li><Link to="/vendor-dashboard/profile">{t('profile')}</Link></li>
                    <li><Link to="/vendor-dashboard/contact">{t('contact')}</Link></li>
                </ul>
                <div className="language-selector">
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                    <button onClick={() => changeLanguage('te')}>తెలుగు</button>
                </div>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<VendorHome />} />
                    <Route path="contracts" element={<Contracts />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    );
};

export default VendorDashboard;
