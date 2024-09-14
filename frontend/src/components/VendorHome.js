import React from 'react';
import './VendorHome.css';

const VendorHome = () => {
    return (
        <div className="vendor-home">
            <h2>Welcome to the Vendor Dashboard</h2>
            <p>Here's an overview of your account and recent activities.</p>
            <div className="overview">
                <div className="card">
                    <h3>Current Contracts</h3>
                    <p>View and manage your ongoing contracts with farmers.</p>
                </div>
                <div className="card">
                    <h3>Payment Status</h3>
                    <p>Check the status of your payments and transactions.</p>
                </div>
                <div className="card">
                    <h3>Market Insights</h3>
                    <p>Stay updated with the latest market trends and data.</p>
                </div>
                <div className="card">
                    <h3>Crop Listings</h3>
                    <p>Manage your crop listings and update details.</p>
                </div>
            </div>
        </div>
    );
};

export default VendorHome;
