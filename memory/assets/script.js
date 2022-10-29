/*

Le scrivo qui due righe, prof, per spiegarle l'approccio che ho usato per questo esercizio...
Di primo impatto sono andata nel pallone, mi creava molta confusione il fatto che i file HTML, CSS e JS fossero già in gran parte completati.
Non riuscivo ad avere chiaro il procedimento da svolgere perchè non riuscivo ad avere un quadro d'insieme.
Inizialemente ho provato ad agire sul file che ci era stato fornito dalla traccia, ma dopo un'oretta ero punto e a capo.
Facevo fatica a capire come dovessi collegare le cose le une tra le altre, a capire cosa già c'èra e cosa invece mancava (pur essendoci qualche istruzione all'interno sia del file JS che del CSS).

A quel punto ho deciso di cambiare completamente modo di procedere, per riuscire almeno a produrre qualcosa.
Mi sono cercata online degli articoli e dei video su come poter procedere nell'implementazione da zero di un memory game.
Ho trovato un video molto chiaro, che ho cercato di seguire, modificando a mano a mano alcune delle funzioni a mio piacimento, per rendere l'esercizio il piu simile a quello della traccia.

Il file che consegno ora non è completo di tutte le funzionalità, perchè nel tempo che ho avuto sono riuscita ad arrivare solo fino a qui; però sono comunque felice di essere riuscita a realizzarne una parte, capendo ciò che stavo scrivendo.

Attualemente, con le conoscenze e la consapevolezza che ho al giorno d'oggi, mi risulta ancora molto difficile partire da sola a scrivere un JavaScript come quello di questo esercizio, perchè lo considero molto piu complesso ed elaborato rispetto a quello che abbiamo scritto negli esercizi giornalieri pomeridiani.
Devo probabilmente fare piu esercizio e studiare di più per migliorare e imparare ad agire anche su codice gia scritto (anche perchè in futuro credo che molte volte sarà così).

*/


let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];


//variabili create
const griglia = document.getElementById('griglia');


//funzione che randomizza

const randomize = () => {
    const random = arrayAnimali;
    random.sort(() => Math.random() - 0.5);
    return random;
};
randomize();


//card generator function

const cardGenerator = () => {
    const random = randomize();
    //generiamo HTML
    random.forEach((item, index) => {
        console.log(item)
        const card = document.createElement('div');
        const face = document.createElement('div');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //attacca le info all'immagine
        face.innerHTML = item;
        card.setAttribute('name', item)
        //attaccare gli elementi alla section
        document.querySelector('section').appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('show');
            checkCards(e);
        })
    });
};

//check delle carte, se match o no

const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const show = document.querySelectorAll('.show')
    //if statement per dire che se le carte flippate sono uguali c'è match, altrimenti c'è wrong
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });

        } else {
            console.log('wrong')
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('show'), 1000);
            });
        };
    }
};

//bottone di restart

function restart() {
    let random = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    document.querySelector('section').style.pointerEvents = 'none';
    random.forEach((item, index) => {
        //randomizza
        setTimeout(() => {
            cards[index].classList.remove('show');
            cards[index].style.pointerEvents = 'all';
            cards[index].setAttribute('name', item);
            faces[index].innerHTML = item;
            document.querySelector('section').style.pointerEvents = 'all';
        }, 1000)
    });
};


cardGenerator();


