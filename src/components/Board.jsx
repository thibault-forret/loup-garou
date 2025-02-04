<div class="player-table">
<table>
    <tr>
        <th>Nom du Joueur</th>
        <th>Statut</th>
    </tr>
    <tr>
        <td>Hugo</td>
        <td><div class="status-icon" onclick="toggleEliminated(this)"></div></td>
    </tr>
    <tr>
        <td>Morgane</td>
        <td><div class="status-icon"></div></td>
    </tr>
    <tr>
        <td>LoupNoir</td>
        <td><div class="status-icon"></div></td>
    </tr>
    <tr>
        <td>OmbreSilencieuse</td>
        <td><div class="status-icon"></div></td>
    </tr>
    <tr>
        <td>Hugo</td>
        <td><div class="status-icon"></div></td>
    </tr>
    <tr>
        <td>Morgane</td>
        <td><div class="status-icon"></div></td>
    </tr>
    <tr>
        <td>LoupNoir</td>
        <td><div class="status-icon"></div></td>
    </tr>
    <tr>
        <td>OmbreSilencieuse</td>
        <td><div class="status-icon"></div></td>
    </tr>
</table>
</div>

function toggleEliminated(element) {
    element.classList.toggle('eliminated');
}