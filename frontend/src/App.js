import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import FarmerDashboard from './components/FarmerDashboard';
import VendorDashboard from './components/VendorDashboard';
import i18n from './i18n'; 

function App() {
    
    const isAuthenticated = !!localStorage.getItem('token'); 

    const userRole = localStorage.getItem('role'); 

 
    const [language, setLanguage] = useState(i18n.language || 'en');

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    return (
        <Router>
            <div>
                {/* You may include a language selector here */}
              

                <Routes>
                    {/* Route for Signup page */}
                    <Route path="/signup" element={<Signup />} />
                    
                    {/* Route for Login page */}
                    <Route path="/login" element={<Login />} />
                    
                    {/* Route for Farmer Dashboard */}
                    <Route
                        path="/farmer-dashboard/*"
                        element={isAuthenticated && userRole === 'farmer' ? <FarmerDashboard /> : <Navigate to="/login" />}
                    />
                    
                    {/* Route for Vendor Dashboard */}
                    <Route
                        path="/vendor-dashboard/*"
                        element={isAuthenticated && userRole === 'vendor' ? <VendorDashboard /> : <Navigate to="/login" />}
                    />
                    
                    {/* Catch-all route for undefined paths, redirects to login */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
