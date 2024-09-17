import React from 'react';
import { useTranslation } from 'react-i18next';

const Orders = () => {
    const { t } = useTranslation(); // Use `t` for translation

    return (
        <div>
            <h2>{t('Your Orders')}</h2>
            {/* Render orders or message if no orders */}
            <p>{t('No Current Orders')}</p>
        </div>
    );
};

export default Orders; // Ensure the component is exported correctly
