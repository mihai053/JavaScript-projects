'use strict';

// stack variabile
const modal = document.querySelector('.modal');  //punem într-o variabila ce selctam
const overlay = document.querySelector('.overlay');  //la fel si pt overlay
const btnCloseModal = document.querySelector('.close-modal');  //variabila overlay
const btnsOpenModal = document.querySelectorAll('.show-modal');  //daca avem mai multe .showmodal
//doar unul este selectat 
// in cazul de fata am folosit document.querySelectorAll() pentru a le selecta pe toate

//console.log(btnsOpenModal);

const closeModal = function(){   //functie ce închide modal-ul atunci cand se apasa pe buton sau in afara box-ului
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


const openModal = function()
 {
    modal.classList.remove('hidden');  //afisare modal pe pagina prin eliminarea clasei hidden din html
    overlay.classList.remove('hidden'); //afisare overlay pe ecran atunci cand se apasa pe buton
 }

for (let i = 0; i < btnsOpenModal.length; i++)
 btnsOpenModal[i].addEventListener('click',openModal);
 
 
 btnCloseModal.addEventListener('click', closeModal)  // apelare functie de mai sus
 overlay.addEventListener('click', closeModal);
    

 document.addEventListener('keydown', function(e){  //e=eveniment
    //console.log('A hey was pressed');
   // console.log(e.key);
   if (e.key === 'Escape' && !modal.classList.contains('hidden'))  {
         //daca modal nu contine clasa hidden o inchidem
        closeModal();  //inchidem modal
        //functia se apeleaza normal cu () altfel nu functioneaza
   }

 })