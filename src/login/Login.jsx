import React, { useState } from 'react';
import QRimg from './assets/mm-app-qr.png';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from './Login.module.css';

function Login() {
    const [UserName, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // To navigate to another page on successful login

    // Handle input changes
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle login submission
    const handleLogin = (e) => {
        e.preventDefault();
        if (UserName === 'user' && password === 'user') {
            navigate('/Userdb');
        } 
        else if(UserName === 'agent' && password === 'agent'){
            navigate('/dashboard');
        }
          else {
            // Display error message for incorrect UserName
            setError('Invalid Credentials');
          }
    };

    return (
        <div className={styles.appContainer}>
            <div className={styles.scrollableContent}>
                <h3 className={styles.titletext}>Log in to Dashboard</h3>
                <div className={styles.container}>
                    <div className={styles.LoginCard}>
                        <label>UserName</label><br />
                        <input 
                            type="text" 
                            id="UserName" 
                            placeholder="UserName" 
                            value={UserName}
                            onChange={handleEmailChange} 
                        /><br />

                        <label>Password</label><br />
                        <input 
                            type="password" 
                            id="Password" 
                            placeholder="Password" 
                            value={password}
                            onChange={handlePasswordChange} 
                        /><br />

                        <a href="#">Forgot Password?</a>

                        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
                        
                            <button onClick={handleLogin}>Log in</button>
                        <p className={styles.textBelow}>
                            Don't have an account? <Link to="/Signup">Sign up</Link>
                        </p>
                    </div>
                </div>
                <div className={styles.AppWindow}>
                    <h4>
                        Discover the MassMutual App
                        <img src={QRimg} alt="QR code" className={styles.qrimg} />
                    </h4>
                    <p>The easiest way to manage your policies, make payments, view statements, and more.</p>
                    <p>Scan QR code to Download!</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
