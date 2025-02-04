import React, { useState } from "react";

function BoardItem({ name }) {
    const [isEliminated, setIsEliminated] = useState(false);

    function toggleEliminated() {
        setIsEliminated(prev => !prev);
    }

    return (
        <tr>
            <td>{name}</td>
            <td>
                <div 
                    className={`status-icon ${isEliminated ? "eliminated" : ""}`} 
                    onClick={toggleEliminated}
                ></div>
            </td>
        </tr>
    );
}

export default BoardItem;
