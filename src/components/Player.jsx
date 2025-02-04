import React from 'react';
import PlayerActions from './PlayerActions';

import loupImage from "../assets/images/loup.png";
import cupidonImage from "../assets/images/cupidon.png";
import chasseurImage from "../assets/images/chasseur.webp";
import voyanteImage from "../assets/images/voyante.png";
import sorciereImage from "../assets/images/sorciere.png";
import voleurImage from "../assets/images/voleur.png";
import villageoisImage from "../assets/images/villageois.png";

function Player({ role }) {
    let backgroundImage;

    switch (role) {
        case "loup-garou":
            backgroundImage = loupImage;
            break;        
        case "cupidon":
            backgroundImage = cupidonImage;
            break;        
        case "chasseur":
            backgroundImage = chasseurImage;
            break;        
        case "voyante":
            backgroundImage = voyanteImage;
            break;        
        case "sorciere":
            backgroundImage = sorciereImage;
            break;                          
        case "voleur":
            backgroundImage = voleurImage;
            break;    
        default:
            backgroundImage = villageoisImage;
            break;
    }    
    
    return (
        <div className="game-map" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <PlayerActions />
        </div>
    );
}

export default Player;
