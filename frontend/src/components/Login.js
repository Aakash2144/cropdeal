import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const [role, setRole] = useState('vendor'); // Default role
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const url = role === 'vendor' ? 'http://localhost:5000/api/vendor/login' : 'http://localhost:5000/api/farmer/login';
            const response = await axios.post(url, { email, password });
            const { token, role: userRole } = response.data;

          
            localStorage.setItem('token', token);
            localStorage.setItem('role', userRole);

   
            if (userRole === 'vendor') {
                navigate('/vendor-dashboard');
            } else if (userRole === 'farmer') {
                navigate('/farmer-dashboard');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Error during login.');
        }
    };

    const handleSignup = () => {
       
        navigate('/signup');
    };

    return (
        <div className='row1'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="radio-buttons">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="vendor"
                                checked={role === 'vendor'}
                                onChange={() => setRole('vendor')}
                            />
                            Vendor
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="farmer"
                                checked={role === 'farmer'}
                                onChange={() => setRole('farmer')}
                            />
                            Farmer
                        </label>
                    </div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input-field"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="input-field"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-text">Don't have an account?</p>
                <button onClick={handleSignup} className="signup-button">Sign Up</button>
            </div>
            <div className='about-container'>
                <h1>We Transform the Agriculture World</h1>
                <p>Join us to revolutionize farming and trade in the agriculture sector. Our platform connects farmers and vendors, empowering growth and innovation in the industry.</p>
            </div>
        </div>
    );
};

export default Login;
