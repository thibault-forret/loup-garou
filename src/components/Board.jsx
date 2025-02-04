import React from 'react';
import BoardItem from './BoardItem';

function Board() {
    return (
        <div className="player-table">
            <table>
                <tbody> 
                    <tr>
                        <th>Nom du Joueur</th>
                        <th>Statut</th>
                    </tr>
                    <BoardItem name="Hugo" />
                    <BoardItem name="Morgane" />
                    <BoardItem name="LoupNoir" />
                    <BoardItem name="OmbreSilencieuse" />
                    <BoardItem name="Hugo" />
                    <BoardItem name="Morgane" />
                    <BoardItem name="LoupNoir" />
                    <BoardItem name="OmbreSilencieuse" />
                </tbody>
            </table>
            </div>
    );
}

export default Board;