import React from 'react';
import { useTranslation } from 'react-i18next';
import './VendorHome.css';

const VendorHome = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="vendor-home">
           
            <div className="overview">
                <div className="card">
                    <h3>{t('currentContracts')}</h3>
                    <p>{t('currentContractsDescription')}</p>
                </div>
                <div className="card">
                    <h3>{t('paymentStatus')}</h3>
                    <p>{t('paymentStatusDescription')}</p>
                </div>
                <div className="card">
                    <h3>{t('marketInsights')}</h3>
                    <p>{t('marketInsightsDescription')}</p>
                </div>
                <div className="card">
                    <h3>{t('cropListings')}</h3>
                    <p>{t('cropListingsDescription')}</p>
                </div>
            </div>
            <div className="language-switcher">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
            </div>
        </div>
    );
};

export default VendorHome;
