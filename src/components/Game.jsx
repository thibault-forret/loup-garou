import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import "../game.css";
import backgroundDay from "../assets/images/background-day.png";
import backgroundNight from "../assets/images/background-night-2.png";

function Jeu() {
    const [backgroundImage, setBackgroundImage] = useState(backgroundDay);

    useEffect(() => {
        const updateBackground = () => {
            const now = new Date();
            let minutes = now.getMinutes();
            setBackgroundImage(minutes % 2 === 0 ? backgroundDay : backgroundNight);
        };

        updateBackground();
        const interval = setInterval(updateBackground, 1000);
        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    return (
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <Clock />
        </div>
        
    );
}

export default Jeu;