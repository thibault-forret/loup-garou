import React, {useState, useEffect} from "react";

function Clock() {

    const [timeClock, setTimeClock] = useState("00:00");
    
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            setTimeClock(`${hours}:${minutes}`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    return (
        <div className="clock">{timeClock}</div>
    );
}

export default Clock;