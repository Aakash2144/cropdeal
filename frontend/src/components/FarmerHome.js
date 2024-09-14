import React from 'react';
import { Link } from 'react-router-dom';
import './FarmerHome.css'; // CSS for styling the page

const FarmerHome = () => {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1>Welcome to Your Dashboard</h1>
                <p>Manage your crops, view orders, and track your history in one place.</p>
            </div>

            <div className="overview-section">
                <div className="overview-card">
                    <h2>Your Crops</h2>
                    <p>Add, manage, and view all your crops in one place.</p>
                    <Link to="/farmer-dashboard/add-crop" className="overview-link">Add Crop</Link>
                </div>

                <div className="overview-card">
                    <h2>Your Orders</h2>
                    <p>Check and manage all incoming orders from vendors.</p>
                    <Link to="/farmer-dashboard/orders" className="overview-link">View Orders</Link>
                </div>

                <div className="overview-card">
                    <h2>Order History</h2>
                    <p>View the history of your completed orders and transactions.</p>
                    <Link to="/farmer-dashboard/history" className="overview-link">View History</Link>
                </div>
            </div>
        </div>
    );
};

export default FarmerHome;
