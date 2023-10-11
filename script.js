const trekKaartButton = document.getElementById('trekKaartButton');

fetch('tarotcard.json')
  .then(response => response.json())
  .then(data => {
    trekKaartButton.addEventListener('click', () => trekEenKaart(data));
  });

function trekEenKaart(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedCard = data[randomIndex];
  
  sessionStorage.setItem('selectedCard', JSON.stringify(selectedCard));
  window.location.href = 'drawnCard.html';
}

window.addEventListener('DOMContentLoaded', () => {
  const kaarten = document.getElementById('gekozenKaart');
  const selectedCard = JSON.parse(sessionStorage.getItem('selectedCard'));
  
  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';
  
  const afbeeldingTarotkaart = 'tarotcards/';
  const afbeeldingURL = afbeeldingTarotkaart + selectedCard.picture;
  
  cardInfo.innerHTML = `
    <img src="${afbeeldingURL}">
    <h2>${selectedCard.title}</h2>
    <p>${selectedCard.kernwoorden}</p>
    <p><strong>De kaart: </strong>${selectedCard.kaart}</p>
    <p><strong>Betekenis: </strong>${selectedCard.betekenis}</p>
  `;
  
  kaarten.appendChild(cardInfo);
});