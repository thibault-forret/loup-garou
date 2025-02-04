import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

function LancerPartie() {
    const navigate = useNavigate();
    const [playerCount, setPlayerCount] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerCount < 5 || playerCount > 10) {
            alert("Le nombre de joueurs doit être compris entre 5 et 10 !");
            return;
        }
        console.log("Lancement de la partie avec", playerCount, "joueurs");
        navigate("/jeu");
    };

    return (
        <div className="game-container">
            <h1 className="game-title">Lancer une Partie</h1>
            <label className="player-label">Nombre de joueurs :</label>
            <input 
                type="range" 
                min="5" 
                max="10" 
                value={playerCount} 
                className="player-slider" 
                id="playerRange"
                onChange={(e) => setPlayerCount(e.target.value)}
            />
            <div className="player-count" id="playerCount">{playerCount} Joueurs</div>
            <button className="start-button" onClick={handleSubmit}>Démarrer la Partie</button>
        </div>
    );
}

export default LancerPartie;
