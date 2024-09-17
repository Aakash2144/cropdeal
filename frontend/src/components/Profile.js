import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './Profile.css'; // For styling the page

const Profile = () => {
    const { t } = useTranslation(); // Destructure `t` for translations
    const [profile, setProfile] = useState({
        fullName: '',
        email: '',
        phone: '',
        farmLocation: '',
        farmSize: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state for fetch
    const [error, setError] = useState(null); // Error state for handling errors

    // Fetch the farmer's profile data when the component loads
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/farmer/profile');
                setProfile(response.data);
            } catch (error) {
                setError(t('errorFetchingProfile')); // Use translation for error messages
                console.error('Error fetching profile:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetch
            }
        };
        fetchProfile();
    }, [t]); // Include `t` in dependencies

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    // Handle profile update submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:5000/api/farmer/profile', profile);
            setIsEditing(false);
            alert(t('errorUpdatingProfile')); // Use translation for success messages
        } catch (error) {
            setError(t('errorUpdatingProfile')); // Use translation for error messages
            console.error('Error updating profile:', error);
        }
    };

    if (isLoading) {
        return <p>{t('loadingProfile')}</p>; // Use translation for loading message
    }

    return (
        <div className="profile-container">
            <h2>{t('farmerProfile')}</h2>
            {error && <p className="error-message">{error}</p>}
            {isEditing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label>{t('fullName')}:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('email')}:</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('phone')}:</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('farmLocation')}:</label>
                        <input
                            type="text"
                            name="farmLocation"
                            value={profile.farmLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('farmSize')}:</label>
                        <input
                            type="number"
                            name="farmSize"
                            value={profile.farmSize}
                            onChange={handleChange}
                            required
                            min="0"
                        />
                    </div>
                    <button type="submit" className="save-button">{t('save')}</button>
                </form>
            ) : (
                <div className="profile-info">
                    <p><strong>{t('fullName')}:</strong> {profile.fullName}</p>
                    <p><strong>{t('email')}:</strong> {profile.email}</p>
                    <p><strong>{t('phone')}:</strong> {profile.phone}</p>
                    <p><strong>{t('farmLocation')}:</strong> {profile.farmLocation}</p>
                    <p><strong>{t('farmSize')}:</strong> {profile.farmSize} acres</p>
                    <button onClick={() => setIsEditing(true)} className="edit-button">{t('Edit Profile')}</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
