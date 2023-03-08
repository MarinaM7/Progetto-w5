
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


