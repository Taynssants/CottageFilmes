function searchMovie() {
    const movieName = document.getElementById('movieName').value.trim().toLowerCase(); // Corrigido: de ariaValueMax para value
    const cards = document.querySelectorAll('.card');
    const resultContainer = document.querySelector('.result-container');

    if (!movieName) {
        alert('Por favor, digite o nome de um filme');
        return;
    }

    let found = false;

    // Esconde todos os cards antes de realizar a busca
    cards.forEach(card => {
        card.style.display = 'none';
    });

    // Procura o card correspondente
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(movieName)) {
            resultContainer.appendChild(card); // Move o card para o result-container
            card.style.display = 'block'; // Exibe o card correspondente
            found = true;
        }
    });

    if (!found) {
        alert('Filme não encontrado. Tente outro nome.');
    }
}
