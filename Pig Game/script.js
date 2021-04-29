'use strict';
//selectez elementele
const score0El = document.querySelector('#score--0'); 
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//conditiile de start
score0El.textContent = 0; //setarea la 0 a scorurilor
score1El.textContent = 0;
diceEL.classList.add('hidden');  //addaugare clasei hidden pentru a sterge dice-ul de pe pagina

let currentScore = 0;  //
let activePlayer = 0;
let playing = true;
const scores = [0,0];

//functie de a schimba playerul
const switchPlayer = function()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;  //ii punem la player=ul curent pana la schimbarea acestuia valoarea 0
    currentScore = 0;  //resetam currentScore cu 0  
    activePlayer = activePlayer === 0 ? 1 : 0;      //daca playerul activ e 0 il schimbam cu 1, altfel schimbam cu 1
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active'); 
}

//functionalitate rolling dice
btnRoll.addEventListener('click', function(){
    if (playing){
    // generam random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; 

    // console.log(dice);
    //display dice
     diceEL.classList.remove('hidden');//afisarea zarului pe pagina
     diceEL.src = `dice-${dice}.png`;  //afisarea zarului corect generat
     document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    //check for rolled1: if true switch to next player

    if (dice !== 1) {
        //add dice to the current score
          currentScore += dice;
          document.getElementById(`current--${activePlayer}`).textContent = currentScore;  //player-ului activ i se incrementeaza scorul

    } else{
    //schimbam la urmatorul jucator
    switchPlayer();
       
    }
}
} )

btnHold.addEventListener('click', function(){
    if(playing){
    // 1. Adaugam scorul curent la scorul player-ului activ
     scores[activePlayer] += currentScore;
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] ;

    //2. Verifica daca scorul este mai mare de 100
      if(scores[activePlayer] >= 20){
          //finish the game
          playing = false;  //oprim jocul
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
          diceEL.classList.add('hidden');
        
      }else{
        switchPlayer();
      }

    // end game
   

    //switch to the next player
  
    }
    
})

btnNew.addEventListener('click', function(){
   scores[0] = 0;  //setam scorurile din array la 0
   scores[1] = 0;
   score0El.textContent = scores[0];  //ce se afiseaza pe pagina setam la 0
   score1El.textContent = scores[1];
   currentScore0El.textContent = 0;  //adica currentSCore si tot scorul
   currentScore1El.textContent = 0;
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');  //stergem clasa player winner pentru jucatorul castigator
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');  //stergem si clasa activeplayer
   activePlayer = 0;  //resetam la 0
   document.querySelector(`.player--${activePlayer}`).classList.add('player--active'); //adaugam clasa activeplayer la playerul 0
   currentScore = 0; 
   playing = true;
   diceEL.classList.add('hidden'); //adugam clasa hidden la zar

})


