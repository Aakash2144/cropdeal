import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // For styling the page

const Profile = () => {
    const [profile, setProfile] = useState({
        fullName: '',
        email: '',
        phone: '',
        farmLocation: '',
        farmSize: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    // Fetch the farmer's profile data when the component loads
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Fetch farmer profile data (this is just a mock API, you can replace it)
                const response = await axios.get('http://localhost:5000/api/farmer/profile');
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, []);

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
            // Send updated profile data to the server
            await axios.put('http://localhost:5000/api/farmer/profile', profile);
            setIsEditing(false); // Exit editing mode after submission
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        }
    };

    return (
        <div className="profile-container">
            <h2>Farmer Profile</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Farm Location:</label>
                        <input
                            type="text"
                            name="farmLocation"
                            value={profile.farmLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Farm Size (in acres):</label>
                        <input
                            type="number"
                            name="farmSize"
                            value={profile.farmSize}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="save-button">Save</button>
                </form>
            ) : (
                <div className="profile-info">
                    <p><strong>Full Name:</strong> {profile.fullName}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Phone:</strong> {profile.phone}</p>
                    <p><strong>Farm Location:</strong> {profile.farmLocation}</p>
                    <p><strong>Farm Size:</strong> {profile.farmSize} acres</p>
                    <button onClick={() => setIsEditing(true)} className="edit-button">Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
