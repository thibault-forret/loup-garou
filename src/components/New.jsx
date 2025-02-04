import React from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

function LancerPartie() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Lancer une Partie</h2>
            <button onClick={() => navigate("/jeu")}>Commencer la partie</button>
        </div>
    );
}

export default LancerPartie;