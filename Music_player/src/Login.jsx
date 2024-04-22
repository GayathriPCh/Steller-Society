import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import backgroundImage from './7270387.gif'; 
import stellerImage from './steller.png'; 

function Loginn() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data.message === 'User authenticated') {
                    navigate('/home'); 
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ backgroundColor: "#131324", padding: "2rem", borderRadius: "1rem", width: "500px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ marginBottom: "1rem" }}>
                    <img src={stellerImage} alt="steller" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "1rem", textTransform: "uppercase" }}>LOGIN</h2>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email" style={{ color: "#ffffff", fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            style={{ width: "90%", padding: "1rem", borderRadius: "0.4rem", border: "0.1rem solid #4e0eff", backgroundColor: "transparent", color: "#ffffff", fontSize: "1rem" }}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="password" style={{ color: "#ffffff", fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            style={{ width: "90%", padding: "1rem", borderRadius: "0.4rem", border: "0.1rem solid #4e0eff", backgroundColor: "transparent", color: "#ffffff", fontSize: "1rem" }}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" style={{ width: "100%", padding: "1rem 2rem", borderRadius: "0.4rem", backgroundColor: "#4e0eff", color: "white", border: "none", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase" }}>
                        LOGIN
                    </button>
                </form>
                <p style={{ marginTop: "1rem", color: "#ffffff", textAlign: "center" }}>Don't have an Account? <Link to="/" style={{ textDecoration: "none", color: "#4e0eff", fontWeight: "bold" }}>Sign Up</Link></p>
            </div>
        </div>
    );
}

export default Loginn;
