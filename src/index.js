import './style.css';

document.addEventListener('DOMContentLoaded', (d) => {

    const cardArray = [
        {
            name : 'hotdog',
            img : 'images/hotdog.png'
        },
        {
            name : 'hotdog',
            img : 'images/hotdog.png'
        },
        {
            name : 'fries',
            img : 'images/fries.png'
        },
        {
            name : 'fries',
            img : 'images/fries.png'
        },
        {
            name : 'cheeseburger',
            img : 'images/cheeseburger.png'
        },
        {
            name : 'cheeseburger',
            img : 'images/cheeseburger.png'
        },
        {
            name : 'ice-cream',
            img : 'images/ice-cream.png'
        },
        {
            name : 'ice-cream',
            img : 'images/ice-cream.png'
        },
        {
            name : 'milkshake',
            img : 'images/milkshake.png'
        },
        {
            name : 'milkshake',
            img : 'images/milkshake.png'
        },
        {
            name : 'pizza',
            img : 'images/pizza.png'
        },
        {
            name : 'pizza',
            img : 'images/pizza.png'
        },

    ]; 
    cardArray.sort( ()=> 0.5 - Math.random()  );
 
    const grid = document.querySelector('#grid');
    const resultToDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var tries = 0;

   function createBoard(){

        for (let i = 0; i < cardArray.length; i++ ) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
   }

   //flip your caard
   function flipCard(){
        var cardId = this.getAttribute('data-id'); 
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if( cardsChosen.length == 2 ){
            setTimeout( checkForMatch, 500 );
            ++tries;
        }

   }

   function checkForMatch () {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if ( cardsChosen[0] == cardsChosen[1] ){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');

            cards[optionOneId].style.pointerEvents = 'none';
            cards[optionTwoId].style.pointerEvents = 'none';

            cardsWon.push( cardsChosen );
            
        }else{
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('sorry try again');
        }

        resultToDisplay.textContent = cardsWon.length;
        cardsChosen = [];
        cardsChosenId = [];

        //check if win
        if( cardsWon.length == cardArray.length/2 ){
            resultToDisplay.textContent = "Congratulations!" + ` ${tries} tries!!`;
        }


   }

   createBoard();

});// DomContentLoaded
