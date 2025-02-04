<div class="chat-box">
    <div class="chat-tabs">
        <div class="tab active" onclick="switchChat('general')">Général</div>
        <div class="tab" onclick="switchChat('loups')">Loups</div>
        <div class="tab" onclick="switchChat('village')">Village</div>
    </div>
    <div class="chat-content" id="chat-general">
        <p class="phase">* La nuit tombe, tout le monde ferme les yeux... *</p><br />
        <p><span class="player">LoupNoir :</span> On attaque qui cette nuit ?</p><br />
        <p><span class="player">OmbreSilencieuse :</span> J’hésite entre Alice et Hugo.</p><br />
        <p class="phase">* Les loups-garous ont choisi leur cible... *</p><br />
        <p class="phase">* Le jour se lève, le village découvre le corps d'Alice... *</p><br />
        <p><span class="player">Hugo :</span> Oh non ! Alice était voyante !</p><br />
        <p><span class="player">Morgane :</span> Qui avons-nous entendu cette nuit ?</p><br />
        <p class="phase">* La nuit tombe, tout le monde ferme les yeux... *</p><br />
        <p><span class="player">LoupNoir :</span> On attaque qui cette nuit ?</p><br />
        <p><span class="player">OmbreSilencieuse :</span> J’hésite entre Alice et Hugo.</p><br />
        <p class="phase">* Les loups-garous ont choisi leur cible... *</p><br />
        <p class="phase">* Le jour se lève, le village découvre le corps d'Alice... *</p><br />
        <p><span class="player">Hugo :</span> Oh non ! Alice était voyante !</p><br />
        <p><span class="player">Morgane :</span> Qui avons-nous entendu cette nuit ?</p><br />
    
    </div>
    <div class="chat-content" id="chat-loups" style="display: none;">
        <p class="phase">* Conversation privée entre loups-garous *</p><br />
        <p><span class="player">LoupNoir :</span> On doit éliminer les plus dangereux.</p><br />
        <p><span class="player">OmbreSilencieuse :</span> Le chasseur peut poser problème...</p><br />
    </div>
    <div class="chat-content" id="chat-village" style="display: none;">
        <p class="phase">* Discussions entre villageois *</p><br />
        <p><span class="player">Morgane :</span> Je pense que quelqu’un ment...</p><br />
        <p><span class="player">Hugo :</span> Qui suspectes-tu ?</p><br />
    </div>
    <div class="chat-input">
        <input type="text" id="chat-message" placeholder="Tapez un message...">
        <button onclick="sendMessage()">Envoyer</button>
    </div>
</div>

function switchChat(tab) {
    document.querySelectorAll('.chat-content').forEach(chat => chat.style.display = 'none');
    document.getElementById('chat-' + tab).style.display = 'block';
    document.querySelectorAll('.tab').forEach(tabEl => tabEl.classList.remove('active'));
    document.querySelector('.tab[onclick="switchChat(\'' + tab + '\')"]').classList.add('active');
}

function sendMessage() {
    let input = document.getElementById('chat-message');
    let message = input.value.trim();
    if (message !== '') {
        let chatContainer = document.getElementById('chat-general');
        let newMessage = document.createElement('p');
        newMessage.innerHTML = `<span class="player">Vous :</span> ${message}`;
        chatContainer.appendChild(newMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        input.value = '';
    }
}