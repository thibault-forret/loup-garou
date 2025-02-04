import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import "../game.css";

function Jeu() {
    const [backgroundImage, setBackgroundImage] = useState("./assets/images/background-day.png");

    useEffect(() => {
        const updateBackground = () => {
            const now = new Date();
            let minutes = now.getMinutes();
            setBackgroundImage(minutes % 2 === 0 ? "./assets/images/background-day.png" : "./assets/images/background-night-2.png");
        };

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