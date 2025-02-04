import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }
        console.log("Inscription avec :", { firstName, lastName, email, password });
        navigate("/lancer-partie");
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Créer un compte</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="text" placeholder="Prénom" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirmer le mot de passe" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" className="register-button">S'inscrire</button>
            </form>
            <a href="/" className="login-link">Déjà un compte ? Connectez-vous</a>
        </div>
    );
}

export default Register;
