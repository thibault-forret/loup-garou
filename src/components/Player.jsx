import React from 'react';
import PlayerActions from './PlayerActions';
import loupImage from "../assets/images/loup.png";
import cupidonImage from "../assets/images/cupidon.png";
import chasseurImage from "../assets/images/chasseur.webp";
import voyanteImage from "../assets/images/voyante.png";
import sorciereImage from "../assets/images/sorciere.png";
import voleurImage from "../assets/images/voleur.png";
import villageoisImage from "../assets/images/villageois.png";
import defaultImage from "../assets/images/loup-garou-dos.png";

function Player({ role }) {
    // Associe chaque rôle à une image spécifique
    const roleImages = {
        loup: loupImage,
        chasseur: chasseurImage,
        voyante: voyanteImage,
        cupidon: cupidonImage,
        sorciere: sorciereImage,
        voleur: voleurImage,
        villageois: villageoisImage,
    };

    const backgroundImage = roleImages[role] || defaultImage;
    
    return (
        <div className="game-map" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <PlayerActions />
        </div>
    );
}

export default Player;
