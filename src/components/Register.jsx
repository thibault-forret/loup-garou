import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }
        console.log("Inscription avec :", { email, password });
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;