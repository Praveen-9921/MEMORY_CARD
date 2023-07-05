const cards = document.querySelectorAll('.memory-card');

let hasFlipCard = false;
let firstCard,secondCard;

function flipCard(){
    this.classList.toggle('flip');

    if(!hasFlipCard){
        //first click
        hasFlipCard = true;
        firstCard = this;
    }else{
        //second click
        hasFlipCard = true;
        secondCard = this;


        //do cards match?
    }
}

cards.forEach(card => card.addEventListener('click',flipCard));


